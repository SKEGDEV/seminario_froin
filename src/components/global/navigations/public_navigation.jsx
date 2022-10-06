import logo from '../../../img/logo.png';
import {Link} from 'react-router-dom'
import '../../../styles/global/navigations/public_nav.css'
import {useEffect} from 'react';

export default function Public_nav(props){  
  var activate = 0;

  const activate_menu = ()=>{ 
    const btn = document.getElementById('btn_nav');
    const img = document.getElementById('img_menu');
    const menu = document.getElementById('public_menu')
    if(activate == 0){
      btn.classList.add('btn-activate');
      img.classList.add('expand');
      menu.classList.add('expand')
      activate=1;
    }
    else{
      img.classList.remove('expand');
      menu.classList.remove('expand');
      btn.classList.remove('btn-activate');
      activate=0;
    }
  } 

  useEffect(()=>{
    const nav = document.getElementById('public_nav')
    document.addEventListener('scroll', ()=>{
      if(window.scrollY > 550 && props.isActive != 'not'){
	nav.classList.add('down');	
      } 
      else{
	nav.classList.remove('down');
      } 
  });

  })
   
   return(
    <div  className="public-nav" id="public_nav">
      <div onClick={activate_menu} className="burger-btn" id="btn_nav">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="bg-back" id="img_menu"></div>
      <div className="filter-bg" id="public_menu">
        <img src={logo} alt="no image" />
        <ul>
          <li><Link to="/"><a onClick={activate_menu} href="">INICIO</a></Link></li>
          <li><a onClick={activate_menu} href="#service">SERVICIOS</a></li>
          <li><a onClick={activate_menu} href="#review">CLIENTES</a></li>
          <li><a onClick={activate_menu} href="#about">QUIENES SOMOS</a></li>
          <li><a onClick={activate_menu} href="#contact">CONTACTO</a></li>
          <li><Link to="/iniciar-sesion"><i onClick={activate_menu} className="fas fa-user-tie"/></Link></li>
        </ul>
      </div>
    </div>
  );
}
