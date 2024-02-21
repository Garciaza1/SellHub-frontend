import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/layout/perfil.module.css'
import session from '../helpers/session';

const Perfil = () => {
    console.log(session());

    if (!session()) {
        window.location.href = '/login';
    }

    const [showNameForm, setShowNameForm] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);
    // Adicione mais estados conforme necessário

    const handleToggleForm = (formName) => {
        switch (formName) {
            case 'name':
                setShowNameForm(!showNameForm);
                break;
            case 'email':
                setShowEmailForm(!showEmailForm);
                break;
            // Adicione mais casos conforme necessário
            default:
                break;
        }
    };

    return (
        <main className="container text-center align-items-center ">
            <div className={`col-12 align-items-center rounded-5  p-4 d-grid justify-content-center ${styles.containerBorder}`}>
                <h2 className="pb-2 fa-user-circle-o">Dados pessoais:</h2>

                {/* Alterar nome */}
                <section className="border border-secundary-subtle rounded-3 p-3 my-2 col-12">
                    <h5 className="card-title pb-1">
                        Alterar nome:
                        <button
                            className="btn btn-outline-secondary btn-sm ms-2 e-1 border-0 border-bottom"
                            style={{ width: '15%' }}
                            onClick={() => handleToggleForm('name')}
                        >
                            ↧
                        </button>
                    </h5>
                    
                    {/* IMPUT DO FORM */}
                    {showNameForm && (
                        <form method="post" action="" className="form">
                            <div className="form-group">
                                <input type="text" className="form-control mb-2 mt-1" name="text_mudar_nome" id="mudar_nome"></input>
                            </div>
                            <button type="submit" name="update_name" className="mudar_nome btn btn-primary mt-2 btn-sm">Mudar nome</button>
                        </form>
                    )}
                </section>

            </div>
        </main>
    );
};

export default Perfil;
