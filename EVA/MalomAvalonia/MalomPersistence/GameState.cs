namespace MalomPersistence
{
    public class GameState
    {
        public int[] Board { get; }
        public int CurrentPlayer { get; }
        public int Placed1 { get; }
        public int Placed2 { get; }
        public bool RemovingMode { get; }

        public GameState(int[] board, int currentPlayer, int placed1, int placed2, bool removingMode)
        {
            if (board == null) throw new ArgumentNullException(nameof(board));
            if (board.Length != 24)
                throw new ArgumentException("A tábla mérete 24 mező kell legyen.", nameof(board));

            Board = board.ToArray();
            CurrentPlayer = currentPlayer;
            Placed1 = placed1;
            Placed2 = placed2;
            RemovingMode = removingMode;
        }
    }
}
