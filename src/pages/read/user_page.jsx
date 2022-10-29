import Private_nav from '../../components/global/navigations/private_nav.jsx';
import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import '../../styles/pages/read.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Activate from '../../utils/notification.js';
import {Link} from 'react-router-dom';

export default function Users(){
  const [users, setUsers]= useState([]);
  const [users_temp, setUsers_temp]= useState([]);

  const filter = (search)=>{
    if(search != ""){
      var expression = new RegExp(`${search}.*`, "i");
      var new_users = users.filter(user=> expression.test(user[1]));
      setUsers(new_users);
      return;
    }
    if(search == ""){
      setUsers(users_temp);
      return;
    }
    
  }

  const get_users = async ()=>{
    try{
      const json_user = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETUSERS)
      if('data' in json_user.data){
	setUsers(json_user.data["data"]);
	setUsers_temp(json_user.data["data"]);
      }
      Activate(json_user.data["msm"], 'info'); 
    }catch(err){
      Activate("err: "+err.message,"error");
    }
    
  }

  useEffect(()=>{ 
    get_users(); 
  },[])
  return(
    <>
      <Private_nav/>  
       <div className="clients">
      <div className="header"> 
        <div className="btn-box">
          <div className="btn-left">
            <Link to="/crear-usuario"><Btn_global btn_title="Agregar Usuario" btn_type="btn success"/></Link>
          </div>
          <div className="btn-right">
            <Link to="/usuarios-inactivos"><Btn_global btn_title="Usuarios inactivos" btn_type="btn warning"/></Link>
          </div>
        </div>
         <div className="search-box">
           <Input
	    placeholder_text="Buscar..." 
	     input_type="text"
            get_value={(value)=>{filter(value);}}
	     />
         </div>
      </div>
      <div className="client-table">
        <div className="r-h hide"><h4>Nombres</h4></div>
        <div className="r-h"><h4>Usuario</h4></div>
        <div className="r-h hide"><h4>Telefono</h4></div>
        <div className="r-h hide"><h4>Rol</h4></div>
        <div className="r-h"><h4>Estado</h4></div> 
        <div className="r-h"><h4>Seleccionar</h4></div>
        {users.map(data=>(
        <>
          <div className="r-b hide"><p>{data[1]}</p></div>
          <div className="r-b"><p>{data[2]}</p></div>
          <div className="r-b hide"><p>{data[3]}</p></div> 
          <div className="r-b hide"><p>{data[4]}</p></div>
          <div className="r-b"><p>{data[5]}</p></div> 
          <div className="r-b">
	   <Link to={"/ficha-usuario/"+data[0]}><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></Link>
	  </div>
        </>
	))}
      </div>
    </div>

    </>
  )
}
