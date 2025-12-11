using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Avalonia.Media;

namespace MalomAvalonia.ViewModels
{
    public class PositionViewModel : ViewModelBase
    {
        private int _owner;
        private bool _isHighlighted;
        private IBrush _background = Brushes.Gray;

        public int Index { get; }
        public double X { get; }
        public double Y { get; }

        public int Owner
        {
            get => _owner;
            set
            {
                if (_owner != value)
                {
                    _owner = value;
                    UpdateBackground();
                    OnPropertyChanged();
                }
            }
        }

        public bool IsHighlighted
        {
            get => _isHighlighted;
            set
            {
                if (_isHighlighted != value)
                {
                    _isHighlighted = value;
                    UpdateBackground();
                    OnPropertyChanged();
                }
            }
        }

        public IBrush Background
        {
            get => _background;
            private set
            {
                if (_background != value)
                {
                    _background = value;
                    OnPropertyChanged();
                }
            }
        }

        public PositionViewModel(int index, double x, double y)
        {
            Index = index;
            X = x;
            Y = y;
            UpdateBackground();
        }

        private void UpdateBackground()
        {
            if (IsHighlighted)
            {
                Background = Brushes.LightGreen;
                return;
            }

            Background = Owner switch
            {
                1 => Brushes.Red,
                2 => Brushes.Blue,
                _ => Brushes.Gray
            };
        }
    }
}
