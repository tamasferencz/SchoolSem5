using MalomPersistence;
using System;
using System.IO;
using System.Linq;

namespace MalomPersistence
{
    public class Persistence : IGamePersistence
    {
        public void SaveGame(string path, GameState state)
        {
            if (state == null) throw new ArgumentNullException(nameof(state));

            using var sw = new StreamWriter(path);
            sw.WriteLine(string.Join(" ", state.Board));
            sw.WriteLine(state.CurrentPlayer);
            sw.WriteLine(state.Placed1);
            sw.WriteLine(state.Placed2);
            sw.WriteLine(state.RemovingMode);
        }

        public GameState LoadGame(string path)
        {
            var lines = File.ReadAllLines(path);

            var board = lines[0].Split(' ').Select(int.Parse).ToArray();
            int currentPlayer = int.Parse(lines[1]);
            int placed1 = int.Parse(lines[2]);
            int placed2 = int.Parse(lines[3]);
            bool removingMode = bool.Parse(lines[4]);

            return new GameState(board, currentPlayer, placed1, placed2, removingMode);
        }
    }
}
