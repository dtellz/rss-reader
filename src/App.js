import Home from './pages/home';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>

  );
}

export default App;
