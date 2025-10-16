using System;
using System.IO;
using System.Linq;
using MalomModel.Interfaces;

namespace MalomPersistence
{
    public class Persistence : IGameModelPersistence
    {
        public void SaveGame(string path, int[] board, int currentPlayer, int placed1, int placed2, bool removingMode)
        {
            using var sw = new StreamWriter(path);
            sw.WriteLine(string.Join(" ", board));
            sw.WriteLine(currentPlayer);
            sw.WriteLine(placed1);
            sw.WriteLine(placed2);
            sw.WriteLine(removingMode);
        }

        public (int[] board, int currentPlayer, int placed1, int placed2, bool removingMode) LoadGame(string path)
        {
            var lines = File.ReadAllLines(path);
            var board = lines[0].Split(' ').Select(int.Parse).ToArray();
            int currentPlayer = int.Parse(lines[1]);
            int placed1 = int.Parse(lines[2]);
            int placed2 = int.Parse(lines[3]);
            bool removingMode = bool.Parse(lines[4]);

            return (board, currentPlayer, placed1, placed2, removingMode);
        }
    }
}
