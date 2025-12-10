using Avalonia;
using Avalonia.Controls;
using Avalonia.Controls.ApplicationLifetimes;
using Avalonia.Markup.Xaml;
using Avalonia.Platform.Storage;
using MalomAvalonia.ViewModels;
using MalomAvalonia.Views;
using MalomModel;
using MsBox.Avalonia;
using MsBox.Avalonia.Enums;
using System;
using System.Threading.Tasks;

namespace MalomAvalonia
{
    public partial class App : Application
    {
        private GameModel _model = null!;
        private GameViewModel _viewModel = null!;

        public override void Initialize()
        {
            AvaloniaXamlLoader.Load(this);
        }

        public override void OnFrameworkInitializationCompleted()
        {
            if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
            {
                _model = new GameModel();
                _viewModel = new GameViewModel(_model);

                _viewModel.SaveRequested += async (s, e) => await OnSaveRequestedAsync(desktop.MainWindow);
                _viewModel.LoadRequested += async (s, e) => await OnLoadRequestedAsync(desktop.MainWindow);
                _viewModel.ExitRequested += OnExitRequested;
                _viewModel.GameEnded += OnGameEnded;

                desktop.MainWindow = new MainWindow
                {
                    DataContext = _viewModel
                };
            }

            base.OnFrameworkInitializationCompleted();
        }

        private void OnExitRequested(object? sender, EventArgs e)
        {
            if (ApplicationLifetime is IClassicDesktopStyleApplicationLifetime desktop)
            {
                desktop.Shutdown();
            }
        }

        private async Task OnSaveRequestedAsync(Window? parent)
        {
            if (parent?.StorageProvider == null) return;

            var file = await parent.StorageProvider.SaveFilePickerAsync(new FilePickerSaveOptions
            {
                Title = "Játék mentése",
                DefaultExtension = "txt",
                FileTypeChoices = new[] { new FilePickerFileType("Text files") { Patterns = new[] { "*.txt" } } }
            });

            if (file != null)
            {
                _viewModel.SaveGame(file.Path.LocalPath);
            }
        }

        private async Task OnLoadRequestedAsync(Window? parent)
        {
            if (parent?.StorageProvider == null) return;

            var files = await parent.StorageProvider.OpenFilePickerAsync(new FilePickerOpenOptions
            {
                Title = "Játék betöltése",
                AllowMultiple = false,
                FileTypeFilter = new[] { new FilePickerFileType("Text files") { Patterns = new[] { "*.txt" } } }
            });

            if (files.Count >= 1)
            {
                _viewModel.LoadGame(files[0].Path.LocalPath);
            }
        }

        private async void OnGameEnded(object? sender, string winnerText)
        {
            var messageBox = MessageBoxManager
                .GetMessageBoxStandard(
                    "Játék vége",
                    winnerText,
                    ButtonEnum.Ok,
                    Icon.Success
                );

            await messageBox.ShowAsync();
        }
    }
}