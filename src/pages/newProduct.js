import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/layout/newProduct.module.css'
import session from '../helpers/session';


const NewProduct = () => {

    //verifica se esta logado
    if (!session()) {
        window.location.href = '/login';
    }

    // imagem do input
    const [imagemProduto, setImagemProduto] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagemProduto(file);
        }
    };

    //pegando o ID do user
    const _usuario = JSON.parse(sessionStorage.getItem('user'))
    const usuarioId = _usuario._id;


    const [name, setName] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuant] = useState('');
    const [descricao, setDesc] = useState('');


    const handleCadastroProduto = async (e) => {
        e.preventDefault();

        try {
            console.log(name, preco, quantidade, descricao, usuarioId, imagemProduto);

            const response = await axios.post('http://localhost:5000/NewProduct',
                {
                    nome: name,
                    preco,
                    quantidade,
                    descricao,
                    usuario: usuarioId,
                    imagem: imagemProduto
                });

            if (response) {
                console.log(response)
                // window.location.href = '/produtos'
            } else {
                console.log("falha no insert")
            }
        } catch (error) {
            if (error.response) {
                // O servidor respondeu com um status de erro
                console.error('Erro ao enviar solicitação. Resposta do servidor:', error.response.data);
            } else if (error.request) {
                // A solicitação foi feita, mas não houve resposta do servidor
                console.error('Erro ao enviar solicitação. Sem resposta do servidor.');
            } else {
                // Algo aconteceu durante a configuração da solicitação que provocou o erro
                console.error('Erro ao enviar solicitação. Erro de configuração:', error.message);
            }
        }
    }

        return (
            <main className={`text-center container main`}>
                <div className='d-flex justify-content-center mb-5'>
                    <h1 className='text-center  me-3'>
                        <span className={`${styles.span}`}>
                            N O V O
                        </span>
                    </h1>
                    <h1 className='text-center ms-3'>
                        <span className={`${styles.span}`}>
                            P R O D U T O
                        </span>
                    </h1>
                </div>

                <div className={`container container-fluid mt-2 mb-5`}>
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">

                            <div className="col-12 text-center">
                                <img src={`../public/images.png`} className="img-fluid me-3" style={{ height: '46px' }} alt="logo Sell Hub" />
                                <h2><strong>Sell Hub</strong></h2>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <hr className='col-6' />
                            </div>

                            <form onSubmit={ handleCadastroProduto } method="post">

                                <div className="row justify-content-center">

                                    <div className="col-6">
                                        <label htmlFor="name" className="form-label mb-4">Nome do produto</label>
                                        <input type="text" name="name" id="text_name" onChange={(e) => setName(e.target.value)} className="form-control" required />
                                    </div>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <hr className='col-10' />
                                    </div>

                                    <div className="col-10">
                                        <label htmlFor="name" className="form-label mb-4">Descrição do produto</label>
                                        <textarea rows={'2'} name="descricao" id="text_desc" onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder='Produto é de uso XXXX, precisa ter XXXX, modelo XXXX . ' required />
                                    </div>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <hr className='col-10' />
                                    </div>

                                    <div className="col-8 container justify-content-center">
                                        <label htmlFor="preco" className="form-label mb-3">Quantidade do produto</label>
                                        <div className="col-3 container  justify-self-center">
                                            <input type="number" step={'1'} min="1" name="qunatidade" placeholder='12' id="text_quant" onChange={(e) => setQuant(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <hr className='col-6' />
                                    </div>

                                    <div className="col-8 container justify-content-center">
                                        <label htmlFor="preco" className="form-label mb-3">Preço do produto</label>
                                        <div className="col-4 container justify-self-center">
                                            <input type="number" step={'.01'} min="1" name="preco" placeholder='20.99' id="text_preco" onChange={(e) => setPreco(e.target.value)} className="form-control" required />
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <hr className='col-10' />
                                    </div>

                                    <label class="mt-2 mb-3" for="">Imagem do Produto</label>

                                    <div className="col-6 container justify-content-center">
                                        <label class={`custom-file-label border rounded-4 p-2 mb-2 mx-3 ${styles.labelImg}`} for="imagemProduto">
                                            {'Choose file'}
                                        </label>

                                        {imagemProduto ? (
                                            <label class={`custom-file-label border rounded-4 p-2  ${styles.labelImg}`}>
                                                {imagemProduto.name}
                                            </label>
                                        ) : ("")
                                        }

                                        <input
                                            type="file"
                                            accept="image/png, image/jpg, image/gif, image/jpeg"
                                            class={`d-none ${styles.inputFile}`}
                                            name='imagemProduto'
                                            id="imagemProduto"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <hr className='col-10' />
                                    </div>

                                    <div className="text-center mt-2 mb-5 pb-2">
                                        <button type="submit" style={{ textDecoration: 'none' }} className={`p-3 ${styles.buttonInvisible}`}><i className="fa-regular fa-floppy-disk me-2" ></i>Guardar</button>
                                    </div>

                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </main>
        );
    }

    export default NewProduct;