import React from 'react'; //import { Link } from "react-router-dom"
import styles from './NavFooter.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRightToBracket, faUserTie,faFaceSadCry,faChartLine} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {

    const user = JSON.parse(sessionStorage.getItem('user'));



    return (
        <div className={` ${styles.navbar}`}>
            <div className="navbar-container container-fluid bng-navbar d-flex">
                <div className="col-2">

                    {user ? (
                        <div className="col-4 d-flex align-content-center p-2">

                            <a href="/home">
                                <FontAwesomeIcon icon={faChartLine} className='pe-5 h-50' />
                                {/* <img src={`.png`} alt="logo SellHub" height="46" className="me-3" /> */}
                            </a>

                            <a href="/home" style={{ textDecoration: 'none' }}>
                                <h2 className='ps-1'>Sell Hub</h2>
                            </a>
                        </div>
                    ) : (
                        <div className="col-4 d-flex align-content-center p-3">
                            <a href="/">
                            <FontAwesomeIcon icon={faChartLine} className='pe-5 h-50' />
                               {/* { <img src={`.png`} alt="logo SellHub" height="46" className="me-3" />} */}
                                </a>
                            <a href="/" style={{ textDecoration: 'none' }}>
                                <h3>Sell Hub</h3>
                            </a>
                        </div>
                    )}
                </div>


                <div className="text-center col-8 pt-4">
                    {user ? (
                        <h2>
                            Olá
                            <span style={{ fontStyle: 'italic' }}> {user.nome}</span>
                        </h2>
                    ) : (
                        <h2>
                            Bem-vindo(a) ao nosso site! Por favor, faça <a href='/Login' style={{ textDecoration: 'none' }}>login.</a>
                        </h2>
                    )}
                </div>





                {user ? (
                    <div className="col-2 d-flex">
                        <div className={`custom-dropdown pt-4 `}>
                            <a href='/perfil' type='dropdown' className={`mx-2 ${styles.buttonInvisible}`} style={{ width: '100%' }}>
                            <FontAwesomeIcon icon={faUserTie} className='me-2' />
                                Perfil
                            </a>
                            <a href='/LogOut' type='dropdown' className={`mx-2 ${styles.buttonInvisible}`} style={{ width: '100%' }}>
                            <FontAwesomeIcon icon={faFaceSadCry} className='me-2' />
                                Sair
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='col-2 pt-4 mt-2'>
                        <a href="/login" className="p-2 ps-2 pe-2 pt-3" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faRightToBracket} className='me-2' />
                            Entrar
                        </a>
                        <a href="/cadastro" className="p-2 ps-2 pe-2 pt-3" style={{ textDecoration: 'none' }}>
                        <FontAwesomeIcon icon={faUserTie} className='me-2' />
                            Cadastrar
                        </a>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Navbar;