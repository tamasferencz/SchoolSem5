using MalomModel;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Avalonia;
using System.Windows.Input;

namespace MalomAvalonia.ViewModels
{
    public class GameViewModel : ViewModelBase
    {
        private readonly GameModel _game;
        private int _selectedFrom = -1;

        private string _infoText = string.Empty;
        public string InfoText
        {
            get => _infoText;
            set
            {
                if (_infoText != value)
                {
                    _infoText = value;
                    OnPropertyChanged();
                }
            }
        }

        public ObservableCollection<PositionViewModel> Positions { get; } =
            new ObservableCollection<PositionViewModel>();

        // --- ESEMÉNYEK, amiket az App kezel ---
        public event EventHandler? SaveRequested;
        public event EventHandler? LoadRequested;
        public event EventHandler? ExitRequested;
        public event EventHandler<string>? GameEnded;

        // --- COMMANDOK, amiket a View bindol ---
        public ICommand PositionClickCommand { get; }
        public ICommand ResetCommand { get; }
        public ICommand SaveCommand { get; }
        public ICommand LoadCommand { get; }
        public ICommand ExitCommand { get; }

        public GameViewModel(GameModel game)
        {
            _game = game ?? throw new ArgumentNullException(nameof(game));

            InitPositions();
            RedrawFromModel();

            PositionClickCommand = new RelayCommand(OnPositionClick);

            ResetCommand = new RelayCommand(_ =>
            {
                _game.Reset();
                _selectedFrom = -1;
                RedrawFromModel();
            });

            SaveCommand = new RelayCommand(_ => SaveRequested?.Invoke(this, EventArgs.Empty));
            LoadCommand = new RelayCommand(_ => LoadRequested?.Invoke(this, EventArgs.Empty));
            ExitCommand = new RelayCommand(_ => ExitRequested?.Invoke(this, EventArgs.Empty));
        }

        public void SaveGame(string path)
        {
            if (string.IsNullOrWhiteSpace(path)) return;
            _game.SaveGameModel(path);
        }

        public void LoadGame(string path)
        {
            if (string.IsNullOrWhiteSpace(path)) return;
            _game.LoadGameModel(path);
            _selectedFrom = -1;
            RedrawFromModel();
        }

        private void InitPositions()
        {
            double btnSize = 80;
            double gap = 30;

            var coords = new Point[24]
            {
                // Külső négyzet
                new(100,100),
                new(100 + (btnSize + gap) * 3,100),
                new(100 + (btnSize + gap) * 6,100),
                new(100 + (btnSize + gap) * 6,100 + (btnSize + gap) * 3),
                new(100 + (btnSize + gap) * 6,100 + (btnSize + gap) * 6),
                new(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 6),
                new(100,100 + (btnSize + gap) * 6),
                new(100,100 + (btnSize + gap) * 3),

                // Középső négyzet
                new(100 + (btnSize + gap),100 + (btnSize + gap)),
                new(100 + (btnSize + gap) * 3,100 + (btnSize + gap)),
                new(100 + (btnSize + gap) * 5,100 + (btnSize + gap)),
                new(100 + (btnSize + gap) * 5,100 + (btnSize + gap) * 3),
                new(100 + (btnSize + gap) * 5,100 + (btnSize + gap) * 5),
                new(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 5),
                new(100 + (btnSize + gap),100 + (btnSize + gap) * 5),
                new(100 + (btnSize + gap),100 + (btnSize + gap) * 3),

                // Belső négyzet
                new(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 2),
                new(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 2),
                new(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 2),
                new(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 3),
                new(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 4),
                new(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 4),
                new(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 4),
                new(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 3)
            };

            Positions.Clear();
            for (int i = 0; i < 24; i++)
            {
                Positions.Add(new PositionViewModel(i, coords[i].X, coords[i].Y));
            }
        }

        private void OnPositionClick(object? parameter)
        {
            if (parameter is not int idx) return;

            if (_game.RemovingMode)
            {
                if (_game.RemovePiece(idx))
                {
                    if (_game.PlayerPieceCount(3 - _game.CurrentPlayer) < 3)
                    {
                        GameEnded?.Invoke(this, $"Játékos {_game.CurrentPlayer} nyert!");
                        _game.Reset();
                    }
                    _selectedFrom = -1;
                    RedrawFromModel();
                }
                return;
            }

            // lerakási fázis
            if (_game.Placed1 < _game.MaxPieces || _game.Placed2 < _game.MaxPieces)
            {
                if (_game.PlacePiece(idx))
                {
                    _selectedFrom = -1;
                    RedrawFromModel();
                }
                return;
            }

            // mozgatási fázis
            if (_selectedFrom == -1)
            {
                if (_game.Board[idx] == _game.CurrentPlayer)
                {
                    _selectedFrom = idx;
                    HighlightMoves(idx);
                }
            }
            else
            {
                if (_game.MovePiece(_selectedFrom, idx))
                {
                    _selectedFrom = -1;
                    if (!_game.PlayerHasMove(_game.CurrentPlayer))
                    {
                        GameEnded?.Invoke(this, $"Játékos {3 - _game.CurrentPlayer} nyert, nincs lépése!");
                        _game.Reset();
                    }
                    RedrawFromModel();
                }
                else if (idx == _selectedFrom)
                {
                    _selectedFrom = -1;
                    RedrawFromModel();
                }
            }
        }

        private void RedrawFromModel()
        {
            for (int i = 0; i < 24; i++)
            {
                Positions[i].IsHighlighted = false;
                Positions[i].Owner = _game.Board[i];
            }

            string phase = (_game.Placed1 < _game.MaxPieces || _game.Placed2 < _game.MaxPieces)
                ? "Elhelyezés"
                : "Mozgatás";

            InfoText =
                $"Fázis: {phase}\n" +
                $"Aktív játékos: {_game.CurrentPlayer} ({(_game.CurrentPlayer == 1 ? "Piros" : "Kék")})\n" +
                $"Piros elhelyezve: {_game.Placed1}/9  Kék elhelyezve: {_game.Placed2}/9" +
                (_game.RemovingMode ? "\nEltávolítási mód: válassz ellenfél bábut" : "");
        }

        private void HighlightMoves(int from)
        {
            RedrawFromModel();

            Positions[from].IsHighlighted = true;

            bool canFly = _game.PlayerPieceCount(_game.CurrentPlayer) == 3;

            int[][] neighbors =
            {
                new[]{1, 7},          // 0
                new[]{0, 2, 9},       // 1
                new[]{1, 3},          // 2
                new[]{2, 4, 11},      // 3
                new[]{3, 5},          // 4
                new[]{4, 6, 13},      // 5
                new[]{5, 7},          // 6
                new[]{0, 6, 15},      // 7

                new[]{9, 15},         // 8
                new[]{1, 8, 10, 17},  // 9
                new[]{9, 11},         // 10
                new[]{3, 10, 12, 19}, // 11
                new[]{11, 13},        // 12
                new[]{5, 12, 14, 21}, // 13
                new[]{13, 15},        // 14
                new[]{7, 8, 14, 23},  // 15

                new[]{17, 23},        // 16
                new[]{9, 16, 18},     // 17
                new[]{17, 19},        // 18
                new[]{11, 18, 20},    // 19
                new[]{19, 21},        // 20
                new[]{13, 20, 22},    // 21
                new[]{21, 23},        // 22
                new[]{15, 16, 22}     // 23
            };

            for (int i = 0; i < 24; i++)
            {
                if (_game.Board[i] != 0) continue;

                if (canFly || neighbors[from].Contains(i))
                    Positions[i].IsHighlighted = true;
            }
        }
    }
}

