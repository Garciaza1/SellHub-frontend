import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Session from './helpers/session.js';
import NewProduct from './pages/newProduct.js';
import Products from './pages/products.js';
import HomeLogged from './pages/homeLogged';
import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import LogOut from './pages/LogOut';
import Perfil from './pages/perfil';
import Navbar from './components/layout/navbar.js';
import Sidebar from './components/layout/sidebar';
import Footer from './components/layout/footer';

function App() {
  const isUserLoggedIn = Session();

  return (
    <Router>
      <Navbar />
      {isUserLoggedIn && <Sidebar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeLogged />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cadastro' element={<Cadastro />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/newProduct' element={<NewProduct />} />
        <Route path='/products' element={<Products />} />
        <Route path='/LogOut' element={<LogOut />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

