using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Linq;
using MalomModel;
using MalomPersistence;

namespace MalomTests
{
    [TestClass]
    public class GameModelTests
    {
        private GameModel? game;

        [TestInitialize]
        public void Setup()
        {
            game = new GameModel();
        }

        [TestMethod]
        public void Reset_ShouldInitializeGameState()
        {
            game!.PlacePiece(0);
            game.Reset();

            Assert.IsTrue(game.Board.All(x => x == 0));
            Assert.AreEqual(1, game.CurrentPlayer);
            Assert.AreEqual(0, game.Placed1);
            Assert.AreEqual(0, game.Placed2);
            Assert.IsFalse(game.RemovingMode);
        }

        [TestMethod]
        public void SetState_ShouldApplyCorrectValues()
        {
            int[] newBoard = Enumerable.Repeat(1, 24).ToArray();
            var state = new GameState(newBoard,2,5,6,true);

            game!.SetState(state);

            Assert.AreEqual(2, game.CurrentPlayer);
            Assert.AreEqual(5, game.Placed1);
            Assert.AreEqual(6, game.Placed2);
            Assert.IsTrue(game.RemovingMode);
            Assert.IsTrue(game.Board.All(x => x == 1));
        }

        [TestMethod]
        [ExpectedException(typeof(System.ArgumentException))]
        public void SetState_ShouldThrowIfBoardNot24()
        {
            int[] invalidBoard = new int[10];
            var state = new GameState(invalidBoard,1,1,1,false);
            game!.SetState(state);
        }

        [TestMethod]
        public void PlacePiece_ShouldPlacePieceAndSwitchPlayer()
        {
            bool result = game!.PlacePiece(0);

            Assert.IsTrue(result);
            Assert.AreEqual(1, game.Board[0]);
            Assert.AreEqual(1, game.Placed1);
            Assert.AreEqual(2, game.CurrentPlayer);
        }

        [TestMethod]
        public void PlacePiece_ShouldReturnFalseIfOccupied()
        {
            game!.PlacePiece(0);
            bool result = game.PlacePiece(0);

            Assert.IsFalse(result);
        }

        [TestMethod]
        public void PlacePiece_ShouldSetRemovingModeIfMillForms()
        {
            game!.PlacePiece(0);
            game.PlacePiece(8);
            game.PlacePiece(1);
            game.PlacePiece(9);
            bool result = game.PlacePiece(2);

            Assert.IsTrue(result);
            Assert.IsTrue(game.RemovingMode);
        }

        [TestMethod]
        public void RemovePiece_ShouldRemoveOpponentPiece()
        {
            game!.PlacePiece(0); // P1
            game.PlacePiece(8); // P2

            game!.PlacePiece(1); // P1
            game!.PlacePiece(9); // P2

            var prop = typeof(GameModel).GetProperty("RemovingMode");
            prop!.SetValue(game, true);

            bool result = game.RemovePiece(8);

            Assert.IsTrue(result);
            Assert.AreEqual(0, game.Board[8]);
        }


        [TestMethod]
        public void RemovePiece_ShouldFailIfOwnPiece()
        {
            game!.PlacePiece(0);
            var currentProp = typeof(GameModel).GetProperty("CurrentPlayer");
            currentProp!.SetValue(game, 1);

            var prop = typeof(GameModel).GetProperty("RemovingMode");
            prop!.SetValue(game, true);

            bool result = game.RemovePiece(0);
            Assert.IsFalse(result);
        }


        [TestMethod]
        public void MovePiece_ShouldMoveToNeighbor()
        {
            game!.PlacePiece(0); // P1
            game.PlacePiece(8); // P2

            var currentProp = typeof(GameModel).GetProperty("CurrentPlayer", System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.Public);
            currentProp!.SetValue(game, 1);

            bool result = game.MovePiece(0, 7);

            Assert.IsTrue(result, "A bábu mozgatása nem sikerült.");
            Assert.AreEqual(0, game.Board[0], "A kiinduló mező nem lett üres.");
            Assert.AreEqual(1, game.Board[7], "A célmezőre nem került át a bábu.");
        }



        [TestMethod]
        public void MovePiece_ShouldFailIfDestinationOccupied()
        {
            game!.PlacePiece(0);
            game.PlacePiece(1);
            game.PlacePiece(2);

            bool result = game.MovePiece(0, 1);
            Assert.IsFalse(result);
        }

        [TestMethod]
        public void MovePiece_ShouldAllowFlyingIfThreePiecesLeft()
        {
            int[] board = new int[24];
            board[0] = board[5] = board[10] = 1;
            var state = new GameState(board,1,9,9, false);
            game!.SetState(state);

            bool result = game.MovePiece(0, 20);
            Assert.IsTrue(result);
        }

        [TestMethod]
        public void PlayerPieceCount_ShouldReturnCorrectCount()
        {
            game!.PlacePiece(0);
            game.PlacePiece(8);
            game.PlacePiece(1);

            int count1 = game.PlayerPieceCount(1);
            int count2 = game.PlayerPieceCount(2);

            Assert.AreEqual(2, count1);
            Assert.AreEqual(1, count2);
        }

        [TestMethod]
        public void PlayerHasMove_ShouldBeTrueIfPlacingPhase()
        {
            Assert.IsTrue(game!.PlayerHasMove(1));
        }

        [TestMethod]
        public void PlayerHasMove_ShouldReturnFalseIfNoPieces()
        {
            var state = new GameState(new int[24], 1 , 9, 9, false);
            game!.SetState(state);
            Assert.IsFalse(game.PlayerHasMove(1));
        }

        [TestMethod]
        public void PlayerHasMove_ShouldReturnTrueIfCanFly()
        {
            int[] board = new int[24];
            board[0] = board[5] = board[10] = 1;
            var state = new GameState(board,1,9,9,false);
            game!.SetState(state);

            Assert.IsTrue(game.PlayerHasMove(1));
        }

        [TestMethod]
        public void PlayerHasMove_ShouldReturnTrueIfNeighborEmpty()
        {
            int[] board = new int[24];
            board[0] = 1;
            board[1] = 0;
            var state = new GameState(board, 1, 9, 9, false);
            game!.SetState(state);

            Assert.IsTrue(game.PlayerHasMove(1));
        }

        [TestMethod]
        public void IsInMill_ShouldDetectMill()
        {
            int[] board = new int[24];
            board[0] = board[1] = board[2] = 1;
            var state = new GameState(board, 1, 3, 0, false);
            game!.SetState(state);

            var method = typeof(GameModel).GetMethod("IsInMill", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            bool result = (bool)method!.Invoke(game, new object[] { 1 })!;

            Assert.IsTrue(result);
        }

        [TestMethod]
        public void FormsMillAt_ShouldDetectNewMill()
        {
            int[] board = new int[24];
            board[0] = board[1] = 1;
            board[2] = 1;
            var state = new GameState(board, 1, 3, 0, false);
            game!.SetState(state);

            var method = typeof(GameModel).GetMethod(
                "FormsMillAt",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance
            );

            bool result = (bool)method!.Invoke(game, new object[] { 2, 1 })!;

            Assert.IsTrue(result);

        }

        [TestMethod]
        public void SwitchPlayer_ShouldAlternateBetween1And2()
        {
            var method = typeof(GameModel).GetMethod("SwitchPlayer", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);

            method!.Invoke(game, null);
            Assert.AreEqual(2, game!.CurrentPlayer);

            method.Invoke(game, null);
            Assert.AreEqual(1, game.CurrentPlayer);
        }

        [TestMethod]
        public void OpponentHasNonMillPieces_ShouldReturnTrueIfExists()
        {
            int[] board = new int[24];
            board[0] = 1; board[8] = 2;
            var state = new GameState(board,1 , 1, 1, false);
            game!.SetState(state);

            var method = typeof(GameModel).GetMethod("OpponentHasNonMillPieces", System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);
            bool result = (bool)method!.Invoke(game, null)!;

            Assert.IsTrue(result);
        }
    }
}
