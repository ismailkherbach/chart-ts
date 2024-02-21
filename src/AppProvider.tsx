import { ThemeProvider } from './theme';
import AppLayout from './components/layout/AppLayout';
import SliderPage from './pages/Slider';

function App() {
  return (
    <ThemeProvider>
      <AppLayout>
        <SliderPage />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
