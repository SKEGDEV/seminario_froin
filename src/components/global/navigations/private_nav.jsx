import logo from '../../../img/logo.png';
import '../../../styles/global/navigations/private_nav.css';
import {BiExit} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Activate from '../../../utils/notification';

export default function Private_nav(){
  const [is_admin, setIs_admin] = useState("");

  const logout = ()=>{
    Activate("Fue un gusto atenderle feliz dia!", "success"); 
     localStorage.remove("token");
     localStorage.remove("rol");
     window.location.replace(process.env.REACT_APP_PC_URL+"iniciar-sesion"); 
 } 

  useEffect(() =>{
    if(localStorage.getItem("rol") == "ADMINISTRADOR"){
      setIs_admin("yes");
    }else{
      setIs_admin("no");
    }
  },[])
  return(
    <div className="private-nav">
      <img className="logo" src={logo} alt=""/>
      <ul className="nav-list">
        <li className={is_admin}><Link to="/usuarios-registrados"><a href="">Usuarios</a></Link></li>
        <li><Link to="/clientes-registrados"><a href="">Clientes</a></Link></li>
        <li><Link to="/dashboard"><a href="">Dashboard</a></Link></li>
        <li><Link to="/prestamos"><a href="">Prestamos</a></Link></li>
        <li><Link to="/realizar-pagos"><a href="">Pagos</a></Link></li>
        <li onClick={logout}>
          <a href=""><BiExit className="i"/></a>
        </li>
      </ul>
    </div>
  )
}
