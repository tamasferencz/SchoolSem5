using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AwariTheGame
{
    public class GameModel
    {

        private int player1Store;
        private int player2Store;
        private int consecutiveTurns = 0;
        //private int numberOfPits;
        //private int totalPits;

        private readonly IGamePersistence? persistence;

        #region Properties
        public int[] Pits { get; set; }
        public bool IsPlayer1Turn { get; set; }
        public int Player1Store { get; set; }
        public int Player2Store { get; set; }
        public int NumberOfPits { get; set; }
        public int TotalPits { get; set; }

        #endregion

        public event EventHandler? BoardChanged;
        public event EventHandler<string>? GameEnded;

        #region GameModel

        public GameModel(int numberOfPits, IGamePersistence persistence)
        {
            Pits = new int[numberOfPits * 2];
            for (int i = 0; i < Pits.Length; i++)
            {
                Pits[i] = 6;
            }
            player1Store = 0;
            player2Store = 0;
            NumberOfPits = numberOfPits;
            TotalPits = numberOfPits * 2;
            IsPlayer1Turn = true;
            this.persistence = persistence;
        }

        #endregion

        #region MakeMove

        public void MakeMove1(int pitInd)
        {
            if (pitInd < 0 || pitInd >= NumberOfPits || Pits[pitInd] == 0)
            {
                return;
            }

            int stonesMoved = SortStones1(pitInd, ref player1Store);
            int remainingPits = Math.Abs((Pits.Length / 2) + 1 - pitInd);

            if (stonesMoved < remainingPits && consecutiveTurns < 1 && !CheckGameEnd())
            {
                consecutiveTurns++;
                BoardChanged?.Invoke(this, EventArgs.Empty);
                return;
            }

            SwitchTurn();

            if (CheckGameEnd())
            {
                string winner = DetermineWinner();
                GameEnded?.Invoke(this, winner);
            }
            else
            {
                BoardChanged?.Invoke(this, EventArgs.Empty);
            }
        }

        public void MakeMove2(int pitInd)
        {
            if (pitInd < NumberOfPits || pitInd >= TotalPits || Pits[pitInd] == 0)
            {
                return;
            }

            int stonesMoved = SortStones2(pitInd, ref player2Store);
            int remainingPits = Math.Abs(Pits.Length + 1 - pitInd);

            if (stonesMoved < remainingPits && consecutiveTurns < 1 && !CheckGameEnd())
            {
                consecutiveTurns++;
                BoardChanged?.Invoke(this, EventArgs.Empty);
                return;
            }

            SwitchTurn();

            if (CheckGameEnd())
            {
                string winner = DetermineWinner();
                GameEnded?.Invoke(this, winner);
            }
            else
            {
                BoardChanged?.Invoke(this, EventArgs.Empty);
            }
        }

        #endregion

        #region SortStones
        private int SortStones1(int pitInd, ref int playerStore)
        {
            int result = SortStones(pitInd, ref playerStore, true);
            Player1Store = playerStore;
            return result;
        }
        private int SortStones2(int pitInd, ref int playerStore)
        {
            int result = SortStones(pitInd, ref playerStore, false);
            Player2Store = playerStore;
            return result;
        }
        #endregion

        #region SortStones Implementation
        private int SortStones(int pitInd, ref int playerStore, bool isPlayer1)
        {
            int stones = Pits[pitInd];
            Pits[pitInd] = 0;
            int stonesMoved = stones;
            bool isFirstRound = true;
            int lastIndex = -1;

            if (isPlayer1)
            {
                while (stones > 0)
                {
                    if (!isFirstRound)
                        pitInd = -1;
                    // Player 1 pits
                    for (int i = pitInd + 1; i < NumberOfPits; i++)
                    {
                        if (stones > 0)
                        {
                            Pits[i]++;
                            stones--;
                            lastIndex = i;
                        }
                    }

                    if (stones > 0)
                    {
                        playerStore++;
                        stones--;
                        lastIndex = -1;
                    }

                    // Player 2 pits
                    for (int i = NumberOfPits; i < TotalPits; i++)
                    {
                        if (stones > 0)
                        {
                            Pits[i]++;
                            stones--;
                            lastIndex = i;
                        }
                    }
                    isFirstRound = false;


                }
                if (stones == 0 && lastIndex < NumberOfPits && lastIndex >= 0 && Pits[lastIndex] == 1 && !isFirstRound)
                {
                    Pits[lastIndex] += Pits[(Pits.Length - 1) - lastIndex];
                    Pits[(Pits.Length - 1) - lastIndex] = 0;
                }
            }
            else
            {
                while (stones > 0)
                {
                    if (!isFirstRound)
                        pitInd = NumberOfPits - 1;

                    // Player 2 pits
                    for (int i = pitInd + 1; i < TotalPits; i++)
                    {
                        if (stones > 0)
                        {

                            Pits[i]++;
                            stones--;
                            lastIndex = i;
                        }

                    }

                    if (stones > 0)
                    {
                        playerStore++;
                        stones--;
                        lastIndex = -1;
                    }

                    // Player 1 pits
                    for (int i = 0; i < NumberOfPits; i++)
                    {
                        if (stones > 0)
                        {
                            Pits[i]++;
                            stones--;
                            lastIndex = i;
                        }
                    }
                    isFirstRound = false;
                }
                if (stones == 0 && lastIndex > NumberOfPits && lastIndex <= TotalPits && Pits[lastIndex] == 1 && !isFirstRound)
                {
                    Pits[lastIndex] += Pits[(Pits.Length - 1) - lastIndex];
                    Pits[(Pits.Length - 1) - lastIndex] = 0;
                }
            }

            return stonesMoved;
        }

        #endregion

        #region CheckEndGame
        public bool CheckGameEnd()
        {
            bool player1Empty = Array.TrueForAll(Pits[0..NumberOfPits], i => i == 0);
            bool player2Empty = Array.TrueForAll(Pits[NumberOfPits..], i => i == 0);

            if (player1Empty || player2Empty)
            {
                string winner = DetermineWinner();
                GameEnded?.Invoke(this, winner);
                return true;
            }

            return false;
        }
        #endregion

        #region Save/Load

        public void SaveGame(string filePath)
        {
            persistence!.SaveGamePers(this, filePath);
        }

        public int LoadGame(string filePath)
        {
            var (pits, player1Store, player2Store) = persistence!.LoadGamePers(filePath);

            this.Pits = pits;
            this.Player1Store = player1Store;
            this.Player2Store = player2Store;
            this.NumberOfPits = pits.Length / 2;

            return pits.Length / 2;
        }
        #endregion

        #region Winner check
        public string DetermineWinner()
        {
            if (Player1Store > Player2Store)
            {
                return "RED Wins!";
            }
            else if (Player2Store > Player1Store)
            {
                return "BLUE Wins!";
            }
            else
            {
                return "It's a Tie!";
            }
        }
        #endregion

        #region Switch Turn
        public void SwitchTurn()
        {
            consecutiveTurns = 0;
            IsPlayer1Turn = !IsPlayer1Turn;
        }
        #endregion

        #region SetStores
        public void SetStores(int player1Store, int player2Store)
        {
            Player1Store = player1Store;
            Player2Store = player2Store;
        }
        #endregion

    }
}
