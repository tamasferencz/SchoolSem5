using MalomModel;
using MalomWPF.ViewModel;
using MalomWPF.View;
using Microsoft.Win32;
using System.Configuration;
using System.Data;
using System.Windows;

namespace MalomWPF
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        private GameModel _model = null!;
        private GameViewModel _viewModel = null!;
        private MainWindow _view = null!;

        public App()
        {
            Startup += App_Startup;
        }

        private void App_Startup(object? sender, StartupEventArgs e)
        {
            // MODEL
            _model = new GameModel();

            // VIEWMODEL
            _viewModel = new GameViewModel(_model);

            // Feliratkozás UI jelzésekre
            _viewModel.SaveRequested += OnSaveRequested!;
            _viewModel.LoadRequested += OnLoadRequested!;
            _viewModel.ExitRequested += OnExitRequested!;
            _viewModel.GameEnded += OnGameEnded!;

            // VIEW
            _view = new MainWindow()
            {
                DataContext = _viewModel
            };

            _view.Show();
        }

        private void OnExitRequested(object? sender, EventArgs e)
        {
            Current.Shutdown();
        }

        private void OnSaveRequested(object? sender, EventArgs e)
        {
            var saveDialog = new SaveFileDialog()
            {
                Filter = "Text files (*.txt)|*.txt"
            };

            if (saveDialog.ShowDialog() == true)
            {
                _viewModel.SaveGame(saveDialog.FileName);
            }
        }

        private void OnLoadRequested(object? sender, EventArgs e)
        {
            var openDialog = new OpenFileDialog()
            {
                Filter = "Text files (*.txt)|*.txt"
            };

            if (openDialog.ShowDialog() == true)
            {
                _viewModel.LoadGame(openDialog.FileName);
            }
        }

        private void OnGameEnded(object? sender, string winnerText)
        {
            MessageBox.Show(winnerText, "Játék vége", MessageBoxButton.OK, MessageBoxImage.Information);
        }
    }
}
