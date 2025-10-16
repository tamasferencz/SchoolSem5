using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.IO;
using Moq;
using AwariTheGame;

namespace AwariTheGameTests
{
    [TestClass]
    public class GameModelTests
    {
        private GameModel? gameModel;
        private Mock<IGamePersistence>? mockPersistence;

        [TestInitialize]
        public void Setup()
        {
            gameModel = new GameModel(6, new GamePersistence());
            mockPersistence = new Mock<IGamePersistence>();
        }

        [TestMethod]
        public void GameInitializationTest()
        {
            Assert.AreEqual(6, gameModel!.NumberOfPits);
            Assert.AreEqual(12, gameModel.Pits.Length);
            Assert.AreEqual(true, gameModel.IsPlayer1Turn);
            Assert.AreEqual(0, gameModel.Player1Store);
            Assert.AreEqual(0, gameModel.Player2Store);

            foreach (int pit in gameModel.Pits)
            {
                Assert.AreEqual(6, pit);
            }
        }

        [TestMethod]
        public void Player1MoveTest()
        {
            gameModel!.MakeMove1(0);
            Assert.AreEqual(0, gameModel.Pits[0]);
            Assert.AreEqual(7, gameModel.Pits[1]);
        }

        [TestMethod]
        public void Player2MoveTest()
        {
            gameModel = new GameModel(6, new GamePersistence());
            gameModel.SwitchTurn();

            gameModel.MakeMove2(7);
            Assert.AreEqual(0, gameModel.Pits[7]);
            Assert.AreEqual(7, gameModel.Pits[8]);
        }

        [TestMethod]
        public void CaptureTest_Player1CapturesStones()
        {
            gameModel = new GameModel(4, new GamePersistence());

            gameModel.MakeMove1(0);

            Assert.AreEqual(0, gameModel.Pits[0]);
            Assert.AreEqual(7, gameModel.Pits[1]);
            Assert.AreEqual(7, gameModel.Pits[2]);
            Assert.AreEqual(7, gameModel.Pits[3]);
            Assert.AreEqual(7, gameModel.Pits[4]);
            Assert.AreEqual(7, gameModel.Pits[5]);
            Assert.AreEqual(6, gameModel.Pits[6]);
            Assert.AreEqual(6, gameModel.Pits[7]);
            Assert.AreEqual(1, gameModel.Player1Store);
        }

        [TestMethod]
        public void CaptureTest_Player2CapturesStones()
        {
            gameModel = new GameModel(4, new GamePersistence());

            gameModel.SwitchTurn();
            gameModel.MakeMove2(5);

            Assert.AreEqual(0, gameModel.Pits[5]);
            Assert.AreEqual(7, gameModel.Pits[6]);
            Assert.AreEqual(7, gameModel.Pits[7]);
            Assert.AreEqual(7, gameModel.Pits[0]);
            Assert.AreEqual(7, gameModel.Pits[1]);
            Assert.AreEqual(7, gameModel.Pits[2]);
            Assert.AreEqual(6, gameModel.Pits[3]);
            Assert.AreEqual(6, gameModel.Pits[4]);
            Assert.AreEqual(1, gameModel.Player2Store);
        }

        [TestMethod]
        public void EndGameTest_Player1Wins()
        {
            for (int i = 0; i < gameModel!.NumberOfPits; i++)
            {
                gameModel.Pits[i] = 0;
            }
            gameModel.SetStores(30, 20);

            bool gameEnded = gameModel.CheckGameEnd();
            Assert.IsTrue(gameEnded);

            string winner = gameModel.DetermineWinner();
            Assert.AreEqual("RED Wins!", winner);
        }

        [TestMethod]
        public void EndGameTest_Tie()
        {
            for (int i = 0; i < gameModel!.NumberOfPits; i++)
            {
                gameModel.Pits[i] = 0;
            }
            gameModel.SetStores(25, 25);

            bool gameEnded = gameModel.CheckGameEnd();
            Assert.IsTrue(gameEnded);

            string winner = gameModel.DetermineWinner();
            Assert.AreEqual("It's a Tie!", winner);
        }

        [TestMethod]
        public void LoadGameTest()
        {
            int[] mockPits = { 6, 6, 6, 0, 7, 6, 6, 6, 6, 6, 6, 6 };
            int mockPlayer1Store = 4;
            int mockPlayer2Store = 2;

            mockPersistence!.Setup(p => p.LoadGamePers(It.IsAny<string>()))
                .Returns((mockPits, mockPlayer1Store, mockPlayer2Store));

            gameModel = new GameModel(6, mockPersistence.Object);

            gameModel.LoadGame("dummyPath");

            CollectionAssert.AreEqual(mockPits, gameModel.Pits, "Pits were not loaded correctly.");
            Assert.AreEqual(mockPlayer1Store, gameModel.Player1Store, "Player 1's store was not loaded correctly.");
            Assert.AreEqual(mockPlayer2Store, gameModel.Player2Store, "Player 2's store was not loaded correctly.");

            mockPersistence.Verify(p => p.LoadGamePers(It.IsAny<string>()), Times.Once);
        }



        [TestMethod]
        public void BoardChangedEventTest()
        {
            bool eventFired = false;
            gameModel!.BoardChanged += (sender, args) => eventFired = true;

            gameModel.MakeMove1(0);

            Assert.IsTrue(eventFired, "BoardChanged event was not fired after a valid move.");
        }

        [TestMethod]
        public void EndGameTest_Player1Wins_WithEvent()
        {
            string? winnerMessage = null;

            gameModel!.GameEnded += (sender, message) => winnerMessage = message;

            for (int i = 0; i < gameModel.NumberOfPits; i++)
            {
                gameModel.Pits[i] = 0;
            }
            gameModel.SetStores(30, 20);

            bool gameEnded = gameModel.CheckGameEnd();
            Assert.IsTrue(gameEnded, "Game should have ended.");

            Assert.AreEqual("RED Wins!", winnerMessage, "GameEnded event did not fire with the expected winner message.");
        }

        [TestMethod]
        public void EndGameTest_Tie_WithEvent()
        {
            string? winnerMessage = null;

            gameModel!.GameEnded += (sender, message) => winnerMessage = message;

            for (int i = 0; i < gameModel.NumberOfPits; i++)
            {
                gameModel.Pits[i] = 0;
            }
            gameModel.SetStores(20, 20);

            bool gameEnded = gameModel.CheckGameEnd();
            Assert.IsTrue(gameEnded, "Game should have ended.");

            Assert.AreEqual("It's a Tie!", winnerMessage, "GameEnded event did not fire with the expected winner message.");
        }

    }
}
