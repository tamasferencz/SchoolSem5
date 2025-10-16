namespace AwariTheGame
{
    public partial class AwariModel : Form
    {
        private GameModel gameModel;
        private IGamePersistence? persistence;

        private Button[]? player1Pits;
        private Button[]? player2Pits;
        private Button? player1Store;
        private Button? player2Store;
        private int numberOfPits;

        #region Properties
        public GameModel GameModel
        {
            get => gameModel;
            set => gameModel = value;
        }

        public int NumberOfPits { get; private set; }

        #endregion

        #region Form Initialization

        public AwariModel(int numberOfPits, IGamePersistence persistence)
        {
            InitializeComponent();

            this.numberOfPits = numberOfPits;
            this.persistence = persistence;
            gameModel = new GameModel(numberOfPits, persistence);
            gameModel.BoardChanged += OnBoardChanged;
            gameModel.GameEnded += OnGameEnded;

            GenerateUI();
            OnBoardChanged(this, EventArgs.Empty);
        }

        #endregion

        #region Generate UI

        public void GenerateUI()
        {
            Controls.Clear();

            Size buttonSize = new Size(160, 160);
            int buttonSpacing = 20;
            int startX = 0;
            int player1Y = 200;
            int player2Y = 0;

            // Player 1 pits
            player1Pits = new Button[numberOfPits];
            for (int i = 0; i < numberOfPits; i++)
            {
                player1Pits[i] = new Button
                {
                    Size = buttonSize,
                    Location = new Point(startX + (buttonSize.Width + buttonSpacing) + i * (buttonSize.Width + buttonSpacing), player1Y),
                    Text = gameModel.Pits[i].ToString(),
                    BackColor = ColorTranslator.FromHtml("#cc3c3c"),
                    ForeColor = Color.Black,
                    Font = new Font("Arial", 16),
                };
                player1Pits[i].Click += Player1Pit_Click;
                player1Pits[i].Tag = i; // Store pit index
                Controls.Add(player1Pits[i]);
            }

            // Player 2 pits
            player2Pits = new Button[numberOfPits];
            for (int i = numberOfPits - 1; i >= 0; i--)
            {
                player2Pits[i] = new Button
                {
                    Size = buttonSize,
                    Location = new Point(startX + (numberOfPits - i) * (buttonSize.Width + buttonSpacing), player2Y),
                    Text = gameModel.Pits[numberOfPits + i].ToString(),
                    BackColor = ColorTranslator.FromHtml("#00b0f0"),
                    ForeColor = Color.Black,
                    Font = new Font("Arial", 16),
                };
                player2Pits[i].Click += Player2Pit_Click;
                player2Pits[i].Tag = i; // Store pit index
                Controls.Add(player2Pits[i]);
            }

            // Player 1 store
            player1Store = new Button
            {
                Size = new Size(160, 320),
                Location = new Point(startX + (buttonSize.Width + buttonSpacing) + numberOfPits * (buttonSize.Width + buttonSpacing), player2Y + 20),
                Text = gameModel.Player1Store.ToString(),
                BackColor = ColorTranslator.FromHtml("#ee0404"),
                ForeColor = Color.Black,
                Enabled = false,
                Font = new Font("Arial", 16),
            };
            Controls.Add(player1Store);

            // Player 2 store
            player2Store = new Button
            {
                Size = new Size(160, 320),
                Location = new Point(startX, player2Y + 20),
                Text = gameModel.Player2Store.ToString(),
                BackColor = ColorTranslator.FromHtml("#0297d0"),
                ForeColor = Color.Black,
                Enabled = false,
                Font = new Font("Arial", 16),
            };
            Controls.Add(player2Store);
        }

        #endregion

        #region PlayerButtonClicks
        private void Player1Pit_Click(object? sender, EventArgs e)
        {
            if (sender is Button btn && btn.Tag is int pitIndex)
            {
                gameModel.MakeMove1(pitIndex);
            }
        }

        private void Player2Pit_Click(object? sender, EventArgs e)
        {
            if (sender is Button btn && btn.Tag is int pitIndex)
            {
                gameModel.MakeMove2(numberOfPits + pitIndex);
            }
        }

        #endregion

        #region Board Changes

        public void OnBoardChanged(object? sender, EventArgs e)
        {
            for (int i = 0; i < numberOfPits; i++)
            {
                player1Pits![i].Text = gameModel.Pits[i].ToString();
                player2Pits![i].Text = gameModel.Pits[numberOfPits + i].ToString();

                player1Pits[i].BackColor = player1Pits[i].Enabled ? ColorTranslator.FromHtml("#cc3c3c") : Color.Gray;
                player2Pits[i].BackColor = player2Pits[i].Enabled ? ColorTranslator.FromHtml("#00b0f0") : Color.Gray;
            }

            player1Store!.Text = gameModel.Player1Store.ToString();
            player2Store!.Text = gameModel.Player2Store.ToString();

            bool isPlayer1Turn = gameModel.IsPlayer1Turn;

            for (int i = 0; i < numberOfPits; i++)
            {
                player1Pits![i].Enabled = isPlayer1Turn;
                player2Pits![i].Enabled = !isPlayer1Turn;

                player1Pits[i].BackColor = player1Pits[i].Enabled ? ColorTranslator.FromHtml("#cc3c3c") : Color.Gray;
                player2Pits[i].BackColor = player2Pits[i].Enabled ? ColorTranslator.FromHtml("#00b0f0") : Color.Gray;
            }
        }

        #endregion

        #region Endgame
        private void OnGameEnded(object? sender, string winnerMessage)
        {
            var result = MessageBox.Show(winnerMessage);

            this.Close();
        }

        #endregion

        #region SetNumberOfPits
        public void SetNumberOfPits(int numberOfPits) { 
            this.numberOfPits = numberOfPits;
        }
        #endregion
    }
}
