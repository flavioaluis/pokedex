import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Menu from 'components/Menu';
import StandardPage from 'components/StandardPage';
import Footer from 'components/Footer';
import Home from 'pages/Home';
import About from 'pages/About';
import Pokedex from 'pages/Pokedex';
import Pokemon from 'pages/Pokemon';
import NotFound from 'pages/NotFound';


export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<StandardPage/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About />} />
            <Route path='pokedex' element={<Pokedex/>} />
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='pokemon/id' element={<Pokemon />}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );

}

