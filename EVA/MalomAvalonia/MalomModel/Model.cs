using MalomPersistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;

[assembly: InternalsVisibleTo("MalomTests")]

namespace MalomModel
{
    public class GameModel
    {
        public int[] Board { get; private set; } = new int[24];
        public int CurrentPlayer { get; private set; } = 1;
        public int Placed1 { get; private set; } = 0;
        public int Placed2 { get; private set; } = 0;
        public bool RemovingMode { get; private set; } = false;

        private IGamePersistence persistence = new Persistence();


        public readonly int MaxPieces = 9;

        private readonly int[][] mills =
        {
            new[]{0,1,2},
            new[]{0,7,6},
            new[]{1,9,17},
            new[]{2,3,4},
            new[]{3,11,19},
            new[]{4,5,6},
            new[]{5,13,21},
            new[]{7,15,23},
            new[]{8,9,10},
            new[]{8,15,14},
            new[]{10,11,12},
            new[]{12,13,14},
            new[]{16,17,18},
            new[]{16,23,22},
            new[]{18,19,20},
            new[]{20,21,22},
        };


        private readonly int[][] neighbors =
        {
            // Külső négyzet (0–7)
            new[]{1, 7},          // 0
            new[]{0, 2, 9},       // 1
            new[]{1, 3},          // 2
            new[]{2, 4, 11},      // 3
            new[]{3, 5},          // 4
            new[]{4, 6, 13},      // 5
            new[]{5, 7},          // 6
            new[]{0, 6, 15},      // 7

            // Középső négyzet (8–15)
            new[]{9, 15},         // 8
            new[]{1, 8, 10, 17},  // 9
            new[]{9, 11},         // 10
            new[]{3, 10, 12, 19}, // 11
            new[]{11, 13},        // 12
            new[]{5, 12, 14, 21}, // 13
            new[]{13, 15},        // 14
            new[]{7, 8, 14, 23},  // 15

            // Belső négyzet (16–23)
            new[]{17, 23},        // 16
            new[]{9, 16, 18},     // 17
            new[]{17, 19},        // 18
            new[]{11, 18, 20},    // 19
            new[]{19, 21},        // 20
            new[]{13, 20, 22},    // 21
            new[]{21, 23},        // 22
            new[]{15, 16, 22}     // 23
        };

        public void SetState(GameState state)
        {
            if (state == null) throw new ArgumentNullException(nameof(state));

            Board = state.Board.ToArray();
            CurrentPlayer = state.CurrentPlayer;
            Placed1 = state.Placed1;
            Placed2 = state.Placed2;
            RemovingMode = state.RemovingMode;
        }


        public void Reset()
        {
            Board = new int[24];
            CurrentPlayer = 1;
            Placed1 = 0;
            Placed2 = 0;
            RemovingMode = false;
        }

        public bool PlacePiece(int idx)
        {
            if (Board[idx] != 0) return false;
            Board[idx] = CurrentPlayer;
            if (CurrentPlayer == 1) Placed1++; else Placed2++;

            if (FormsMillAt(idx, CurrentPlayer))
            {
                RemovingMode = true;
                return true;
            }

            SwitchPlayer();
            return true;
        }

        public bool RemovePiece(int idx)
        {
            if (Board[idx] == 0 || Board[idx] == CurrentPlayer) return false;
            if (IsInMill(idx) && OpponentHasNonMillPieces()) return false;

            Board[idx] = 0;
            RemovingMode = false;
            if (PlayerPieceCount(3 - CurrentPlayer) < 3) return true;
            SwitchPlayer();
            return true;
        }

        public bool MovePiece(int from, int to)
        {
            if (Board[from] != CurrentPlayer) return false;
            if (Board[to] != 0) return false;

            bool canFly = PlayerPieceCount(CurrentPlayer) == 3;
            if (!canFly && !neighbors[from].Contains(to)) return false;

            Board[from] = 0;
            Board[to] = CurrentPlayer;

            if (FormsMillAt(to, CurrentPlayer))
            {
                RemovingMode = true;
                return true;
            }

            SwitchPlayer();
            return true;
        }

        public int PlayerPieceCount(int player) => Board.Count(x => x == player);

        public bool PlayerHasMove(int player)
        {
            if ((player == 1 && Placed1 < MaxPieces) || (player == 2 && Placed2 < MaxPieces))
                return true;

            int count = PlayerPieceCount(player);
            if (count == 0) return false;
            if (count == 3) return Board.Any(x => x == 0);

            for (int i = 0; i < 24; i++)
                if (Board[i] == player && neighbors[i].Any(n => Board[n] == 0)) return true;

            return false;
        }

        internal void SwitchPlayer() => CurrentPlayer = 3 - CurrentPlayer;

        internal bool OpponentHasNonMillPieces()
        {
            int opp = 3 - CurrentPlayer;
            for (int i = 0; i < 24; i++)
                if (Board[i] == opp && !IsInMill(i)) return true;
            return false;
        }

        internal bool IsInMill(int idx)
        {
            int owner = Board[idx];
            if (owner == 0) return false;
            foreach (var m in mills)
                if (m.Contains(idx) && m.All(i => Board[i] == owner)) return true;
            return false;
        }

        internal bool FormsMillAt(int idx, int player) =>
            mills.Any(m => m.Contains(idx) && m.All(i => Board[i] == player));

        public void SaveGameModel(string path)
        {
            var state = new GameState(Board, CurrentPlayer, Placed1, Placed2, RemovingMode);
            persistence.SaveGame(path, state);
        }

        public GameState LoadGameModel(string path)
        {
            var state = persistence.LoadGame(path);
            SetState(state);
            return state;
        }
    }
}
