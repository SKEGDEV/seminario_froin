import Btn_global from '../../components/buttons/global_btn.jsx';
import Simple_modal from '../../components/global/Modal.jsx';
import user_default from '../../img/user_default.png'; 
import { useParams } from 'react-router-dom';
import '../../styles/pages/record.css';
import Activate from '../../utils/notification';
import axios from 'axios'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import admin_user from '../../utils/obj_admin.js';


export default function User_redord(){
  
  const {id} = useParams();
  const admin = new admin_user();
  const [user_record, setUser_record] = useState([]); 
  const [modal, setModal] = useState(false);

  const get_user_record = async ()=>{
    try{
      const user = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETUSER+id); 
      if('user' in user.data){
	Activate(user.data["msm"], "success");
	setUser_record(user.data["user"]);
	return;
      }
      Activate(user.data["msm"], "warning")

    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  useEffect(()=>{
    get_user_record();
  },[])
  const convert_date= (str_date)=>{
    var date = new Date(str_date), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  return(
    <>
    <Simple_modal 
      modal_question="Esta seguro de inhabilitar este usuario?"
      isOpen={modal}
      danger_function={()=>{setModal(false);}}
      success_function={()=>{admin.disable_user(id);}}
     /> 
    <div className="record">
      <div className="record-header">
       <img src={user_default} alt="" />
       <Btn_global btn_function={()=>{setModal(true);}}  btn_title="Inhabilitar" btn_type="btn danger"/>
      </div>
      <div className="record-body">
        <h1>INFORMACION PERSONAL</h1>
       <div className="grid-information">
        <div className="left">
          <h3>Nombre de Usuario:</h3>
          <h3>Nombres:</h3>
          <h3>Apellidos:</h3>
          <h3>Fecha de nacimiento:</h3>
          <h3>Email:</h3>
          <h3>Telefono:</h3>
          <h3>NIT:</h3>
          <h3>Rol:</h3>
          <h3>Estado:</h3>
        </div>
        {user_record.map(data=>(
        <div className="right">
          <h3>{data[0]}</h3>
          <h3>{data[1]}</h3>
          <h3>{data[2]}</h3>
          <h3>{convert_date(data[3])}</h3>
          <h3>{data[4]}</h3>
          <h3>{data[5]}</h3>
          <h3>{data[6]}</h3>
          <h3>{data[7]}</h3>
          <h3>{data[8]}</h3>
        </div>
	))}
       </div>
      </div>
      <div class="record-footer">
        <div class="btn-box">
          <div class="btn-left">
            <Link to="/usuarios-registrados"><Btn_global btn_title="Regresar" btn_type="btn warning"/></Link>
          </div>
          <div class="btn-right">
            <Link to={"/actualizar-usuario/"+id}> 
	     <Btn_global btn_title="Actualizar informacion" btn_type="btn primary"/>
	   </Link>
          </div>
        </div>
      </div>

    </div>
    </>

  );
}
