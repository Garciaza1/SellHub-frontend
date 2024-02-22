import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/layout/login.module.css';
import axios from 'axios';
import session from '../helpers/session';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:5000/UserLogin', {
        email,
        senha: password
      });

      if (response) {
        const data = response.data;
        const user = data.user;
        const token_ = data.token;
        const dataMessage = data.message;

        setLoginMessage(dataMessage);

        // Armazene o token, o user e o estado de login em sessionStorage como strings
        sessionStorage.setItem('logged', 'true'); // apenas string 'true'
        sessionStorage.setItem('token', token_);
        sessionStorage.setItem('user', JSON.stringify(user)); // tem q passar tudo na session como json

        console.log('Login foi um sucesso!');

        // Direcione o usuário para a página principal após o login bem-sucedido
        window.location.href = '/home';
      } else {
        const errorData = response;
        console.error('Falha no login. Detalhes:', errorData);
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        console.log("Conexão recusada pelo servidor");
      }
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  //verifica se esta logado
  if (session()) {
    window.location.href = '/home';
  }

  return (
    <div className={`container-fluid mt-5`}>
      <div className={`row justify-content-center`}>
        <div className={`col-lg-5 col-md-6 col-sm-8 col-10`}>
          <div className={`p-4`}>
            <div className={`d-flex align-items-center justify-content-center mt-4`}>
              <img src="" className={`img-fluid me-3`} style={{ height: '46px' }} alt="" />
              <h2><strong>Sell Hub</strong></h2>
            </div>
            <div className='d-flex justify-content-center mb-3'>
              <hr className='col-4' />
            </div>

            <h2 className="text-center p-4"><strong>L O G I N</strong></h2>

            <div className='d-flex justify-content-center'>
              <hr className='col-6' />
            </div>

            <div className={`row justify-content-center`}>
              <div className={`col-8`}>

                <form onSubmit={handleLogin} method="post">
                  <div className={`mb-3`}>
                    <label htmlFor="email" className={`form-label`} >Email</label>
                    <input type="email" name="email" id="text_email" onChange={(e) => setEmail(e.target.value)} className={`form-control`} required />
                  </div>

                  <div className='d-flex justify-content-center mt-3'>
                    <hr className='col-10' />
                  </div>

                  <div className={`mb-3`}>
                    <label htmlFor="password" className={`form-label`}>Password</label>
                    <input type="password" name="password" id="text_password" onChange={(e) => setPassword(e.target.value)} className={`form-control`} required />
                  </div>

                  <input type="hidden" name="hidden_input" id="hidden_input" className={`d-none`} />

                  <div className='d-flex justify-content-center'>

                    <div className={`text-center pt-2 px-3`}>
                      <a className={``} href="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Voltar<i className={`fa-solid fa-igloo  ms-2`}></i>
                      </a>
                    </div>

                    <div className={`text-center pt-2 px-3`}>
                      <button type="submit" className={` ${styles.buttonInvisible}`} >
                        Entrar<i className={`fa-solid fa-right-to-bracket ms-2 pe-2`}></i>
                      </button>
                    </div>
                  </div>

                  <div className='d-flex justify-content-center mt-3'>
                    <hr className='col-12' />
                  </div>

                  <div className={`my-3 text-center pt-2`}>
                    {loginMessage && <p>{loginMessage}</p>}

                    <a href="">Não Tenho Cadastro</a>


                    {/* <div className={`pt-2`}>
                      <a href="">Esqueci-me da senha!</a>
                    </div> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;