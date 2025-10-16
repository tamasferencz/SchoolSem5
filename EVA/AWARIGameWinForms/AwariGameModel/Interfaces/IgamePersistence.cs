using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using AwariTheGame;

namespace AwariTheGame
{
    public interface IGamePersistence
    {
        void SaveGamePers(GameModel gameModel, string filePath);
        public (int[] pits, int player1Store, int player2Store) LoadGamePers(string filePath);
    }
}
