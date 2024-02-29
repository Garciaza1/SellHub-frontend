import React from 'react'; //import { Link } from "react-router-dom"
import styles from '../components/layout/homeLogged.module.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import session from '../helpers/session';



function HomeLogged() {
        
    if (!session()) {
        window.location.href = '/login';
    }


    return (

        <div className='container main-container'>
                <h1 className='text-center mb-5'>
                    <span className={`${styles.span}`}>
                    D A S H B O A R D
                    </span>

                </h1>
            <main className={`main col-12 align-self-center bg- rounded-3 ${styles.home}`}>
                <section className='px-5 d-flex justify-content-between my-5 valores'>

                    <div className='col-4 '>
                        a
                    </div>
                    <div className='col-4 text-center'>
                        a
                    </div>
                    <div className='col-4 text-end'>
                        a
                    </div>

                </section>
                <section className='px-5 d-flex justify-content-between my-5 grafico'>

                    <div className=' col-12 text-center'>
                        a
                    </div>

                </section>

                <section className='px-5 d-flex justify-content-between my-5 valor-x-dia'>

                    <div className='col-12 text-center'>
                        a
                    </div>

                </section>

            </main>
        </div>



    );

}

export default HomeLogged;