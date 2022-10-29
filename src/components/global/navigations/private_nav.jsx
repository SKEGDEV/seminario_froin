import logo from '../../../img/logo.png';
import '../../../styles/global/navigations/private_nav.css';
import {BiExit} from 'react-icons/bi';
import {Link} from 'react-router-dom';

export default function Private_nav(){
  return(
    <div className="private-nav">
      <img className="logo" src={logo} alt=""/>
      <ul className="nav-list">
        <li><Link to="/usuarios-registrados"><a href="">Usuarios</a></Link></li>
        <li><Link to="/clientes-registrados"><a href="">Clientes</a></Link></li>
        <li><a href="">Reportes</a></li>
        <li><Link to="/prestamos"><a href="">Prestamos</a></Link></li>
        <li><a href="">Pagos</a></li>
        <li>
          <a href=""><BiExit className="i"/></a>
        </li>
      </ul>
    </div>
  )
}
