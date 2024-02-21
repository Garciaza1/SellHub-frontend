import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

  const isLoggedIn = sessionStorage.getItem('logged') // Converta para booleano
  const user = JSON.parse(sessionStorage.getItem('user')); // Converta de volta para objeto
  


  return (
    <div className='justify-content-center align-itens-center text-center'>
      
      <h1>Home</h1>

      {
        isLoggedIn ? (

          <div>
            <p>Bem-vindo! Você está logado  {user.nome}.</p>
          </div>

        ) : (

          <p>Olá.</p>

        )}

    </div>
  );
}

export default Home;