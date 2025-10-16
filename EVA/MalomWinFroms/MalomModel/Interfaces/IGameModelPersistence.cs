using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalomModel.Interfaces
{
    public interface IGameModelPersistence
    {
        void SaveGame(string path, int[] board, int currentPlayer, int placed1, int placed2, bool removingMode);
        (int[] board, int currentPlayer, int placed1, int placed2, bool removingMode) LoadGame(string path);
    }
}
