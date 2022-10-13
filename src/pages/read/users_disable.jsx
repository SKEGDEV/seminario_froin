import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import Simple_modal from '../../components/global/Modal.jsx';
import '../../styles/pages/read.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Activate from '../../utils/notification.js';
import admin_user from '../../utils/obj_admin.js';
import {Link} from 'react-router-dom';

export default function Users_disble(){
  const admin = new admin_user();
  const [users, setUsers]= useState([]);
  const [id, setId]= useState("");
  const [users_temp, setUsers_temp]= useState([]);
  const [modal, setModal] = useState(false);

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
    const json_user = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETUSERSD)
    setUsers(json_user.data["data"]);
    Activate(json_user.data["msm"], 'success');
    setUsers_temp(json_user.data["data"]);
  }

  useEffect(()=>{ 
    get_users(); 
  },[])
  return(
    <>  
    <Simple_modal 
      modal_question="Esta seguro de habilitar este usuario?"
      isOpen={modal}
      danger_function={()=>{setModal(false);}}
      success_function={()=>{admin.enable_user(id);}}
     />
       <div className="clients">
      <div className="header"> 
       <br/>
       <br/>
       <Link to="/usuarios-registrados"><Btn_global btn_title="Regresar" btn_type="btn danger"/></Link>
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
	  <Btn_global btn_function={()=>{setId(data[0]); setModal(true);}} btn_title="Habilitar" btn_type="btn warning"/>
	  </div>
        </>
	))}
      </div>
    </div>

    </>
  )
}
