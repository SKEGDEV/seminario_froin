import logo from '../../../img/logo.png';
import '../../../styles/global/navigations/private_nav.css';
import {BiExit} from 'react-icons/bi';

export default function Private_nav(){
  return(
    <div className="private-nav">
      <img className="logo" src={logo} alt=""/>
      <ul className="nav-list">
        <li><a href="">Usuarios</a></li>
        <li><a href="">Clientes</a></li>
        <li><a href="">Reportes</a></li>
        <li><a href="">Prestamos</a></li>
        <li><a href="">Pagos</a></li>
        <li>
          <a href=""><BiExit className="i"/></a>
        </li>
      </ul>
    </div>
  )
}
