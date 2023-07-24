import Menu from 'components/Menu';
import StandardPage from 'components/StandardPage';
import Home from 'pages/Home';
import About from 'pages/About';
import Pokedex from 'pages/Pokedex';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<StandardPage/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About />} />
            <Route path='pokedex' element={<Pokedex/>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );

}

