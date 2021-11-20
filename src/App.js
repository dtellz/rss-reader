import Home from './pages/home';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Article from './pages/article'


function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/news' element={<Article />}></Route>
          <Route path='*' element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
