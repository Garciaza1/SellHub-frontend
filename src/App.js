import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Session from './helpers/session.js';
import Client from './helpers/clientOrNot.js';

import NewProduct from './UserPages/newProduct.js';
import Products from './UserPages/products.js';
import HomeLogged from './UserPages/homeLogged';
import Home from './UserPages/home';
import Login from './UserPages/login';
import Cadastro from './UserPages/cadastro';
import LogOut from './UserPages/LogOut';
import Perfil from './UserPages/perfil';
import Navbar from './components/layout/navbar.js';
import Sidebar from './components/layout/sidebar';
import Footer from './components/layout/footer';



// importar os client pages e retornar dependendo do login que fizer 
import ClientSidebar from './components/layout/clientSidebar';
import LoginClient from './ClientPages/loginClient.js';
import CadastroClient from './ClientPages/cadastroClient.js';
import ProductsClients from './ClientPages/productsClient.js';
import HomeLoggedClients from './ClientPages/homeLoggedClient';
import PerfilClients from './ClientPages/perfilClient.js';
import ProdutoClient from './ClientPages/product.js';

//fazer um helper pra saber e retornar o valor bool

function App() {
  const isUserLoggedIn = Session();

  const client = Client();
  console.log(client);

  if (client) {
    return (
      //deixar tudas a views de client aqui
      <Router>
        <Navbar />
        {isUserLoggedIn && <ClientSidebar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/loginClient' element={< LoginClient />} />
          <Route path='/cadastroClient' element={< CadastroClient />} />
          <Route path='/perfilClient' element={<PerfilClients />} />
          <Route path='/productsClient' element={<ProductsClients />} /> 
          <Route path='/homeClient' element={<HomeLoggedClients />} /> 
          <Route path='/produto/:id'   element={<ProdutoClient />} /> 
          {/* ROTAS DE /cart e /shopping */}

          <Route path='/loginClient' element={< LoginClient />} />
          <Route path='/cadastroClient' element={< CadastroClient />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/LogOut' element={<LogOut />} />
        </Routes>
        <Footer />
      </Router>
    )
  } else if (!client) {
    // apenas oque for de user
    return (
      <Router>
        <Navbar />
        {isUserLoggedIn && <Sidebar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<HomeLogged />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/newProduct' element={<NewProduct />} />
          <Route path='/products' element={<Products />} />

          <Route path='/loginClient' element={< LoginClient />} />
          <Route path='/cadastroClient' element={< CadastroClient />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/LogOut' element={<LogOut />} />
        </Routes>
        <Footer />
      </Router>
    );
  } 
}

export default App;

