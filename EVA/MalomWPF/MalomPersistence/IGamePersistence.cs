using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalomPersistence
{
    public interface IGamePersistence
    {
        void SaveGame(string path, GameState state);
        GameState LoadGame(string path);
    }
}
