using MalomModel;
using MalomModel.Interfaces;
using MalomPersistence;
using System;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;

namespace MalomWinForms
{
    public class Form1 : Form
    {
        private Button[] posButtons = new Button[24];
        private Label? infoLabel;
        private Button? resetBtn, saveBtn, loadBtn;
        private int selectedFrom = -1;

        private GameModel game = new GameModel();
        private IGameModelPersistence persistence = new Persistence();

        public Form1()
        {
            Text = "Malom";
            ClientSize = new Size(1600, 950);
            InitUI();
            Redraw();
        }

        private void InitUI()
        {
            int btnSize = 80;
            int gap = 30;

            Point[] coords = new Point[24]
            {
                // Külső négyzet
                new Point(100,100),
                new Point(100 + (btnSize + gap) * 3,100),
                new Point(100 + (btnSize + gap) * 6,100),
                new Point(100 + (btnSize + gap) * 6,100 + (btnSize + gap) * 3),
                new Point(100 + (btnSize + gap) * 6,100 + (btnSize + gap) * 6),
                new Point(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 6),
                new Point(100,100 + (btnSize + gap) * 6),
                new Point(100,100 + (btnSize + gap) * 3),

                // Középső négyzet
                new Point(100 + (btnSize + gap),100 + (btnSize + gap)),
                new Point(100 + (btnSize + gap) * 3,100 + (btnSize + gap)),
                new Point(100 + (btnSize + gap) * 5,100 + (btnSize + gap)),
                new Point(100 + (btnSize + gap) * 5,100 + (btnSize + gap) * 3),
                new Point(100 + (btnSize + gap) * 5,100 + (btnSize + gap) * 5),
                new Point(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 5),
                new Point(100 + (btnSize + gap),100 + (btnSize + gap) * 5),
                new Point(100 + (btnSize + gap),100 + (btnSize + gap) * 3),

                // Belső négyzet
                new Point(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 2),
                new Point(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 2),
                new Point(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 2),
                new Point(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 3),
                new Point(100 + (btnSize + gap) * 4,100 + (btnSize + gap) * 4),
                new Point(100 + (btnSize + gap) * 3,100 + (btnSize + gap) * 4),
                new Point(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 4),
                new Point(100 + (btnSize + gap) * 2,100 + (btnSize + gap) * 3)
            };



            for (int i = 0; i < 24; i++)
            {
                var b = new Button();
                b.Tag = i;
                b.Size = new Size(100, 100);
                b.Location = coords[i];
                b.Click += Pos_Click!;
                b.FlatStyle = FlatStyle.Flat;
                b.FlatAppearance.BorderSize = 0;

                System.Drawing.Drawing2D.GraphicsPath path = new System.Drawing.Drawing2D.GraphicsPath();
                path.AddEllipse(0, 0, b.Width, b.Height);
                b.Region = new Region(path);

                Controls.Add(b);
                posButtons[i] = b;
            }

            infoLabel = new Label()!;
            infoLabel.AutoSize = true;
            infoLabel.Location = new Point(1000, 200);
            infoLabel.Font = new Font(FontFamily.GenericSansSerif, 10, FontStyle.Bold);
            Controls.Add(infoLabel);

            resetBtn = new Button();
            resetBtn.Text = "Új játék";
            resetBtn.Size = new Size(200, 60);
            resetBtn.Font = new Font(FontFamily.GenericSansSerif, 14, FontStyle.Bold);
            resetBtn.Location = new Point(1100, 350);
            resetBtn.Click += (s, e) => { game.Reset(); Redraw(); };
            Controls.Add(resetBtn);


            saveBtn = new Button()!;
            saveBtn.Text = "Mentés";
            saveBtn.Size = new Size(200, 60);
            saveBtn.Font = new Font(FontFamily.GenericSansSerif, 14, FontStyle.Bold);
            saveBtn.Location = new Point(1100, 420);
            saveBtn.Click += (s, e) =>
            {
                persistence.SaveGame("save.txt", game.Board, game.CurrentPlayer, game.Placed1, game.Placed2, game.RemovingMode);
                MessageBox.Show("Játék elmentve.");
            };
            Controls.Add(saveBtn);

            loadBtn = new Button()!;
            loadBtn.Text = "Betöltés";
            loadBtn.Size = new Size(200, 60);
            loadBtn.Font = new Font(FontFamily.GenericSansSerif, 14, FontStyle.Bold);
            loadBtn.Location = new Point(1100, 490);
            loadBtn.Click += (s, e) =>
            {
                var state = persistence.LoadGame("save.txt");
                game.SetState(state.board, state.currentPlayer, state.placed1, state.placed2, state.removingMode);
                Redraw();
                MessageBox.Show("Játék betöltve.");
            };
            Controls.Add(loadBtn);
        }

        private void Pos_Click(object sender, EventArgs e)
        {
            var b = (Button)sender;
            int idx = (int)b.Tag!;

            if (game.RemovingMode)
            {
                if (game.RemovePiece(idx))
                {
                    if (game.PlayerPieceCount(3 - game.CurrentPlayer) < 3)
                    {
                        MessageBox.Show($"Játékos {game.CurrentPlayer} nyert!");
                        game.Reset();
                    }
                    Redraw();
                }
                return;
            }

            if (game.Placed1 < game.MaxPieces || game.Placed2 < game.MaxPieces)
            {
                if (game.PlacePiece(idx)) Redraw();
                return;
            }

            if (selectedFrom == -1)
            {
                if (game.Board[idx] == game.CurrentPlayer)
                {
                    selectedFrom = idx;
                    HighlightMoves(idx);
                }
            }
            else
            {
                if (game.MovePiece(selectedFrom, idx))
                {
                    selectedFrom = -1;
                    if (!game.PlayerHasMove(game.CurrentPlayer))
                    {
                        MessageBox.Show($"Játékos {3 - game.CurrentPlayer} nyert, nincs lépés!");
                        game.Reset();
                    }
                    Redraw();
                }
                else if (idx == selectedFrom)
                {
                    selectedFrom = -1;
                    Redraw();
                }
            }
        }

        private void HighlightMoves(int from)
        {
            Redraw();
            bool canFly = game.PlayerPieceCount(game.CurrentPlayer) == 3;
            posButtons[from].BackColor = Color.LightBlue;

            int[][] neighbors = new int[][]
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

            for (int i = 0; i < 24; i++)
            {
                if ((canFly && game.Board[i] == 0) || (!canFly && neighbors[from].Contains(i) && game.Board[i] == 0))
                    posButtons[i].BackColor = Color.LightGreen;
            }
        }

        private void Redraw()
        {
            for (int i = 0; i < 24; i++)
            {
                var b = posButtons[i];
                b.Text = "";
                b.BackColor = Color.Gray;

                if (game.Board[i] == 1)
                {
                    b.BackColor = Color.Red;
                }
                else if (game.Board[i] == 2)
                {
                    b.BackColor = Color.Blue;
                }
            }

            string phase = (game.Placed1 < game.MaxPieces || game.Placed2 < game.MaxPieces) ? "Elhelyezés" : "Mozgatás";
            infoLabel!.Text = $"Fázis: {phase}\nAktív játékos: {game.CurrentPlayer} ({(game.CurrentPlayer == 1 ? "Piros" : "Kek")})\n" +
                             $"Piros elhelyezve: {game.Placed1}/9  Kek elhelyezve: {game.Placed2}/9" +
                             (game.RemovingMode ? "\nEltávolítási mód: válassz ellenfél bábut" : "");
        }
        protected override void OnPaint(PaintEventArgs e)
        {
            base.OnPaint(e);
            Graphics g = e.Graphics;
            Pen pen = new Pen(Color.Black, 3);

            ConnectPoints(g, pen, 0, 1, 2, 3, 4, 5, 6, 7, 0);

            ConnectPoints(g, pen, 8, 9, 10, 11, 12, 13, 14, 15, 8);

            ConnectPoints(g, pen, 16, 17, 18, 19, 20, 21, 22, 23, 16);

            g.DrawLine(pen, GetButtonCenter(1), GetButtonCenter(9));
            g.DrawLine(pen, GetButtonCenter(3), GetButtonCenter(11));
            g.DrawLine(pen, GetButtonCenter(5), GetButtonCenter(13));
            g.DrawLine(pen, GetButtonCenter(7), GetButtonCenter(15));

            g.DrawLine(pen, GetButtonCenter(9), GetButtonCenter(17));
            g.DrawLine(pen, GetButtonCenter(11), GetButtonCenter(19));
            g.DrawLine(pen, GetButtonCenter(13), GetButtonCenter(21));
            g.DrawLine(pen, GetButtonCenter(15), GetButtonCenter(23));
        }

        private void ConnectPoints(Graphics g, Pen pen, params int[] indices)
        {
            for (int i = 0; i < indices.Length - 1; i++)
            {
                g.DrawLine(pen, GetButtonCenter(indices[i]), GetButtonCenter(indices[i + 1]));
            }
        }

        private Point GetButtonCenter(int idx)
        {
            Button b = posButtons[idx];
            return new Point(b.Location.X + b.Width / 2, b.Location.Y + b.Height / 2);
        }

    }
}
