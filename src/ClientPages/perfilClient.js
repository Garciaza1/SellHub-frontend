import React, { useState } from 'react';import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/layout/perfil.module.css';
import session from '../helpers/session';
import axios from 'axios';


const Perfil = () => {

  if (!session()) {
    window.location.href = '/loginClient';
  }
  console.log(sessionStorage.getItem('user'));
  
  console.log(JSON.parse(sessionStorage.getItem('user')));
  const user = JSON.parse(sessionStorage.getItem('user'));

  const [formData, setFormData] = useState({
    nome: user.nome,
    email: user.email,
    senha: user.senha,
    cpf: user.cpf,
    phone: user.phone,
    nasc: user.nasc,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    try {
      const response = await axios.put(`http://localhost:5000/updateUser/${user._id}`, formData);
      
      console.log(formData);
      if (response) {
        // mudar pra colocar isso dentro do user na session so que de forma onde o indice fique com os nomes
        const updatedUser = response.data.user;
        console.log('Perfil atualizado com sucesso:', updatedUser);
        const userData = JSON.stringify(updatedUser);
        sessionStorage.setItem('user', userData);
        window.location.href = '/perfil';
      }
      else {
        console.log('login deu errado a resposta não foi enviada corretamente, Resposta: ', JSON.stringify(response));
      }


    } catch (error) {
      console.log('algo deu errado na solicitação, erro: ', JSON.stringify(error))
      // window.location.href = '/perfil';
    }
    // console.log('Dados do formulário:', formData);
  };

  return (
    <main className="container text-center align-items-center">
      <div className={`col-12 align-items-center rounded-5 p-4 d-grid justify-content-center ${styles.containerBorder}`}>
        <h2 className="pb-2 fa-user-circle-o">Dados pessoais:</h2>

        <form onSubmit={handleSubmit} className="form">
          {/* Alterar nome */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar nome:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2 mt-1"
                name="nome"
                id="mudar_nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Alterar email */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar Email:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2 mt-1"
                name="email"
                id="mudar_email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Alterar senha */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar Senha:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2 mt-1"
                name="senha"
                id="mudar_senha"
                value={formData.senha}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Alterar cpf */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar Cpf:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2 mt-1"
                name="cpf"
                id="mudar_cpf"
                value={formData.cpf}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Alterar phone */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar Telefone:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="text"
                className="form-control mb-2 mt-1"
                name="phone"
                id="mudar_phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Alterar nasc */}
          <section className={` ${styles.section} rounded-3 p-3 my-2 col-12`}>
            <h5 className="card-title pb-1">Alterar data de nascimento:</h5>

            {/* INPUT DO FORM */}
            <div className="form-group">
              <input
                type="date"
                className="form-control mb-2 mt-1"
                name="nasc"
                id="mudar_nasc"
                value={formData.nasc}
                onChange={handleInputChange}
              />
            </div>
          </section>

          <button type="submit" className="mudar_nome btn btn-primary mt-2 btn-sm">
            Mudar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Perfil;


