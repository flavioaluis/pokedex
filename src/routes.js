import Menu from 'components/Menu';
import Home from 'pages/Home';
import Pokedex from 'pages/Pokedex';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pokedex' element={<Pokedex/>} />
      </Routes>
    </Router>
  );

}

