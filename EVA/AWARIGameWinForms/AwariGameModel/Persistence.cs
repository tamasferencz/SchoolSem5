using System.IO;

namespace AwariTheGame
{
    public class GamePersistence : IGamePersistence
    {
        public void SaveGamePers(GameModel gameModel, string filePath)
        {
            using (StreamWriter writer = new StreamWriter(filePath))
            {
                writer.WriteLine(string.Join(",", gameModel.Pits));

                writer.WriteLine($"{gameModel.Player1Store},{gameModel.Player2Store}");
            }
        }

        public (int[] pits, int player1Store, int player2Store) LoadGamePers(string filePath)
        {
            using (StreamReader reader = new StreamReader(filePath))
            {
                try
                {
                    string pitsLine = reader.ReadLine()!;
                    int[] pits = Array.ConvertAll(pitsLine.Split(','), int.Parse);

                    string storesLine = reader.ReadLine()!;
                    string[] stores = storesLine.Split(',');
                    int player1Store = int.Parse(stores[0]);
                    int player2Store = int.Parse(stores[1]);

                    return (pits, player1Store, player2Store);
                }
                catch (Exception ex)
                {
                    throw new IOException("Error loading game", ex);
                }
            }
        }

    }
}
