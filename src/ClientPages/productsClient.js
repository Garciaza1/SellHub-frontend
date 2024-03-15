import React, { useState, useEffect } from 'react';
import axios from 'axios';
import session from '../helpers/session';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import styles from '../components/layout/product.module.css'

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const produtosPerPage = 4;
  const pagesVisited = pageNumber * produtosPerPage;

  const pageCount = Math.ceil(produtos.length / produtosPerPage);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/AllProducts');

        setProdutos(response.data);
      } catch (error) {
        console.error('Erro na solicitação:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const displayProdutos = produtos
    .slice(pagesVisited, pagesVisited + produtosPerPage)
    .map((produto) => (
      <div className='col-4 border rounded-5 mx-2 ms-4 my-3' key={produto._id}>
        <a href={`/produto/${produto._id}`}>
          <h3 className='mt-3'>{produto.nome}</h3>
        </a>
          <h3>Descrição:<h5 className='my-1'>{produto.descricao}</h5></h3>
          <h3 className=''>Valor: {produto.preco} R$</h3>
          <h3 className=''>Quantidade: {produto.quantidade}</h3>
        <a href={`/produto/${produto._id}`}>
          <img className='mb-3 rounded-4' src={produto.imagem} alt={produto.nome} width={80}  />
        </a>
      </div>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (!session()) {
    window.location.href = '/loginClient';
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
    <main className='container justify-self-center'>
      <div className='text-center mb-5'>
        <h1 className='text-center mb-5'>
          <span className={`${styles.span}`}>
            P R O D U T O S
          </span>
        </h1>
      </div>

      <div className={`main col-12 rounded-3 ${styles.home}`}>
        <div className={`row ms-1 text-center justify-content-center ${styles.card}`}>
          {displayProdutos}
        </div>

        <div className={`${styles.paginate} `}>
          <ReactPaginate
            previousLabel={'Anterior'}
            nextLabel={'Próxima'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            previousLinkClassName={'pagination__link mx-2'}
            nextLinkClassName={'pagination__link mx-2 '}
            disabledClassName={'pagination__link--disabled'}
            activeClassName={'pagination__link--active'}
          />
        </div>
      </div>
    </main>
  );
}

export default Produtos;
