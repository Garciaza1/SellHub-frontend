import { React } from 'react'; //import { Link } from "react-router-dom"
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHouse, faFaceSadCry, faUserTie, faUsers, faDesktop, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar() {

    const user = JSON.parse(sessionStorage.getItem('user'));
    const primeiroNome = user.nome.split(' ')[0];

    return (
        <aside className={` ${styles.sidebar} `}>

            <div className={`pt-3 ms-2 pb-5 ${styles.user}`}>
                <span className={`iconSpan mx-2 `}>
                    <FontAwesomeIcon icon={faUser} className='me-2' />
                    {primeiroNome}
                </span>

                <ul className="list-group sidebar">

                    <li className="mb-3 me-2 rounded-4">
                        <a href="/productsClient" className={` text-light`}>
                            <FontAwesomeIcon icon={faHouse} className='me-2' />
                            Home
                        </a>
                    </li>

                    <li className="mb-3 me-2 rounded-4 ">
                        <a href="/cart" className="text-light">
                            <FontAwesomeIcon icon={faUsers} className='me-2' />
                            My cart
                        </a>
                    </li>

                    <li className="mb-3 me-2 rounded-4 ">
                        <a href="/shopping" className="text-light">
                            <FontAwesomeIcon icon={faUsers} className='me-2' />
                            My shopping
                        </a>
                    </li>

                    <li className="me-2 rounded-4 ">
                        <a href="/perfilClient" className="text-light">
                            <FontAwesomeIcon icon={faUserTie} className='me-2' />
                            Perfil
                        </a>
                    </li>

                    <li className={`${styles.logout} rounded-4`}>
                        <a href="/logout" className="text-light">
                            <FontAwesomeIcon icon={faFaceSadCry} className='me-2' />
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )


}
export default Sidebar;