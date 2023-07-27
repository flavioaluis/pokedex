import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'context';
import { ProtectedLayout } from 'components/ProtectedLayout';
import Login from 'components/Login';
import Menu from 'components/Menu';
import StandardPage from 'components/StandardPage';
import Footer from 'components/Footer';
import Profile from 'pages/Profile';
import Home from 'pages/Home';
import About from 'pages/About';
import Pokedex from 'pages/Pokedex';
import Pokemon from 'pages/Pokemon';
import NotFound from 'pages/NotFound';

export default function AppRouter() {
  return (
    <main className='container'>
      <AuthProvider>
        <Router>
          <Menu />
          <Routes>
            <Route path='/' element={<StandardPage />}>
              <Route path='login' element={<Login />} />
              <Route index element={<Home />} />
              <Route path='profile' element={<ProtectedLayout><Profile/></ProtectedLayout>}/>
                 
              <Route path='about' element={<About />} />
              <Route path='pokedex' element={<Pokedex />} />
            </Route>
            
            <Route path='pokemon/:id' element={<Pokemon />} />
            <Route path='*' element={<NotFound />} />
            
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </main>
  );
}
