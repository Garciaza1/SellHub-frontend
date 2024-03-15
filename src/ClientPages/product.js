import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/layout/product.module.css'
import session from '../helpers/session';


function ProdutoClient() {

    if (!session()) {
        window.location.href = '/loginClient';
    }

    const { id } = useParams();
    const [produto, setProduto] = useState([]);
    const [vendedor, setVendedor] = useState();
    const [loading, setLoading] = useState(true);
    const [quantidade, setQuantidade] = useState(1);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:5000/Product/${id}`);
                setProduto(response.data);
                
                const vendedorId = response.data.usuario;
                
                const responseVendedor = await axios.get(`http://localhost:5000/GetOneUser/${vendedorId}`);
                setVendedor(responseVendedor.data);
                
            } catch (error) {
                console.error('Erro na solicitação:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);


    const handleQuantidadeChange = (event) => {
        setQuantidade(event.target.value);
    };

    const handleReserva = () => {
        // Lógica para reservar o produto com a quantidade selecionada
        console.log(`Produto ${produto.nome} reservado com ${quantidade} unidades.`);
    };

    const handleAdicionarAoCarrinho = () => {
        // Lógica para adicionar o produto ao carrinho com a quantidade selecionada
        console.log(`Produto ${produto.nome} adicionado ao carrinho com ${quantidade} unidades.`);
    };

    const handleCompra = () => {
        // Lógica para realizar a compra do produto com a quantidade selecionada
        console.log(`Produto ${produto.nome} comprado com ${quantidade} unidades.`);
    };


    if (!produto) {
        return (
            <main className='container justify-self-center'>
                <div className='text-center mb-5'>
                    <h1 className='text-center mb-5'>
                        <span className={`${styles.span}`}>
                            Produto não encontrado
                        </span>
                    </h1>
                </div>
            </main>
        );
    }

    if (loading) {
        return (
            <main className='container justify-self-center'>
                <div className='text-center mb-5'>
                    <h1 className='text-center mb-5'>
                        <span className={`${styles.span}`}>
                            C A R R E G A N D O . . .
                        </span>
                    </h1>
                </div>
            </main>
        );
    }

    return (
        <main className={`row ${styles.row}`}>
            <div className={`container col-10 text-center justify-content-end ps-5 `}>
                <h1 className='p-2'>{produto.nome}</h1>
                <h2 className='p-4'>
                    <img className='rounded-4' src={produto.imagem} alt={produto.nome} width={400} />
                </h2>
                <h3 className=''>Descrição:</h3>
                <h4 className=' pb-4'>{produto.descricao}</h4>
                <h2 className=''>R${produto.preco}</h2>
                <h3 className=''>Quantidade em estoque: {produto.quantidade}</h3>
            </div>

            <div className={`container compra col-2 text-center mt-5 pt-3 ${styles.compra}`}>
                <p>
                    {produto.nome}
                </p>
                <p>
                    {produto.descricao}
                </p>
                <div className='py-3'>
                    <div className=''>
                        Quantidade:
                    </div>
                    <select className='px-3 rounded' value={quantidade} onChange={handleQuantidadeChange}>
                        {[...Array(produto.quantidade).keys()].map((qtd) => (
                            <option key={qtd} value={qtd + 1}>
                                {qtd + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <form onSubmit={handleReserva}>
                    <button type='submit' className='btn'>
                        <h2>Reservar</h2>
                    </button>
                </form>
                <form onSubmit={handleAdicionarAoCarrinho}>
                    <button type='submit' className='btn'>
                        <h2>Adicionar ao Carrinho</h2>
                    </button>
                </form>
                <form onSubmit={handleCompra}>
                    <button type='submit' className='btn'>
                        <h2>Comprar</h2>
                    </button>
                </form>

                <div className={`text-start mt-5 ${styles.text}`}>
                    <div>Vendedor </div>
                    <p>{vendedor.nome}</p>
                    <p>Email: {vendedor.email}</p>
                </div>

            </div>
        </main>
    )



}

export default ProdutoClient;