import React from 'react';
import Session from '../helpers/session';
import  'bootstrap/dist/js/bootstrap.bundle.min';
import cookie from 'js-cookies'
const LogOut = () => {

    if(Session()){
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('logged')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('tipo')
        cookie.removeItem('userData')
        cookie.removeItem('userToken')
        sessionStorage.clear();

    }

    return (
        <div className='text-center'>

            <h1 className='text-danger text-center mb-5'>
                Você Saiu!
            </h1>

            <h3 className='pt-5'>
                <a href='/'>
                    Voltar
                </a>
            </h3>

        </div>
    )

}
export default LogOut;