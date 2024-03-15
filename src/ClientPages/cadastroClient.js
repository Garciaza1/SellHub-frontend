import styles from '../components/layout/cadastro.module.css';
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import session from '../helpers/session';


const CadastroClient = () => {

  //verifica se esta logado
  if (session()) {
    window.location.href = '/productsClient';
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [nasc, setNasc] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [CadastroMessage, setCadastroMessage] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('http://localhost:5000/NewClient', {
        nome: name,
        email,
        senha: password,
        phone,
        cpf,
        nasc
      });

      if (response) {
        const data = response.data;
        const user = data.user;
        const token_ = data.token;
        const dataMessage = data.message;

        setCadastroMessage(dataMessage);
        setLoggedIn(true);

        // Armazene o token e o user em sessionStorage

        sessionStorage.setItem('tipo', "cliente");
        sessionStorage.setItem('logged', isLoggedIn);
        sessionStorage.setItem('token', token_);
        sessionStorage.setItem('user', user);

        console.log('Login foi um sucesso!');

        // Direcione o usuário para a página principal após o login bem-sucedido
        window.location.href = '/LoginClient';
      } else {
        const errorData = response;
        console.error('Falha no login. Detalhes:', errorData);
      }
    } catch (error) {
      console.error('Erro ao enviar solicitação:', error);
    }
  }




  return (
    <div className={` ${styles.container}`}>
      <div className="container-fluid mt-2 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="">

              <div className="row justify-content-center">
                <div className="col-8">
                  <div className="col-12 text-center">
                    <img src={`../../public/images.png`} className="img-fluid me-3" style={{ height: '46px' }} alt="logo Sell Hub" />
                    <h2><strong>Sell Hub</strong></h2>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <hr className='col-6' />
                  </div>

                  <h2 className="text-center p-4"><strong>C A D A S T R O</strong></h2>

                  <div className='d-flex justify-content-center'>
                    <hr className='col-7' />
                  </div>

                  <form onSubmit={handleCadastro} method="post">

                    <div className="">
                      <label htmlFor="name" className="form-label">Nome</label>
                      <input type="text" name="name" id="text_name" onChange={(e) => setName(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <hr className='col-10' />
                    </div>

                    <div className="">
                      <label htmlFor="text_email" className="form-label">Email</label>
                      <input type="email" name="text_email" id="text_email" onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <hr className='col-10' />
                    </div>

                    <div className="">
                      <label htmlFor="text_senha" className="form-label">Senha</label>
                      <input type="password" name="text_senha" id="text_senha" onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <hr className='col-10' />
                    </div>

                    <div className="">
                      <label htmlFor="text_phone" className="form-label">Telefone</label>
                      <input type="text" name="text_phone" id="text_phone" onChange={(e) => setPhone(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <hr className='col-10' />
                    </div>

                    <div className="">
                      <label htmlFor="text_cpf" className="form-label">Cpf</label>
                      <input type="text" name="text_cpf" id="text_cpf" onChange={(e) => setCpf(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <hr className='col-10' />
                    </div>

                    <div className="">
                      <label htmlFor="text_nasc" className="form-label">Data de nascimento</label>
                      <input type="date" name="text_nasc" id="text_nasc" onChange={(e) => setNasc(e.target.value)} className="form-control" required />
                    </div>

                    <div className='d-flex justify-content-center mt-3'>
                      <br className='col-6' />
                    </div>

                    <div className="text-center">
                      <a href="/" className="p-3" style={{ textDecoration: 'none' }}><i className="fa-solid fa-xmark me-2"></i>Cancelar</a>
                      <button type="submit" style={{ textDecoration: 'none' }} className={`p-3 ${styles.buttonInvisible}`}><i className="fa-regular fa-floppy-disk me-2" ></i>Guardar</button>
                    </div>

                    <div className='d-flex justify-content-center'>
                      <br className='col-6' />
                      {CadastroMessage && <p>{CadastroMessage}</p>}
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroClient;