import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn';
import Auth_modal from '../../components/global/modal_auth.jsx';
import logo from '../../img/logo.png'
import user_default from '../../img/user_default.png';
import '../../styles/pages/create.css'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Activate from '../../utils/notification.js';
import admin_user from '../../utils/obj_admin.js';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

export default function Update_user(){
  const {id} = useParams();
  const [modal, setModal] = useState(false);
  const [firt_name, setFirt_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIT, setNIT] = useState("");
  const [user_name, setUser_name] = useState("");
  const [user_name_auth, setUser_name_auth] = useState("");
  const [password_auth, setPassword_auth] = useState("");
  const [rol, setRol] = useState("1");
  const [password, setPassword] = useState("");
  const [password_confirm, setPassword_confirm] = useState("");

  const update_user = async()=>{
    const user_search = {
      user_name: user_name_auth,
      user_password:password_auth 
    }
     try{
      if(password_auth != ""){
	const auth =  await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_AUTHU,user_search);
	if(auth.data["isAuth"] == "Yes"){
	  Activate(auth.data["msm"], "success");		
	}else{
	  Activate(auth.data["msm"], "warning"); 
	  setPassword_auth("");
	  return;
	}
      }else{
	Activate("Por favor ingrese la contraseña de autorizacion", "warning");
	setPassword_auth("");
	return;
      } 
    }catch(e){
      Activate("err: "+e.message, "error");
      setModal(false);
      return
    }
    const admin = new admin_user(); 
      if(password == password_confirm){
	admin.update_user(
	user_name_auth,
	password_auth,
        id,
        user_name,
        password,
        firt_name,
        last_name,
        birthday,
        email,
        phone,
        NIT,
        rol
      );
      prev();
      setModal(false);
      return;
    }
      Activate("Ambas contraseñas deben coincidir","warning"); 
    setPassword_auth("");
  }

  const get_user_info = async()=>{ 
    try{
      const info = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETUSERU+id);
      if('user' in info.data){
	info.data['user'].map(data=>{
	  setUser_name(data[0]);
	  setUser_name_auth(data[0]);
	  setFirt_name(data[1]);
	  setLast_name(data[2]); 
	  setBirthday(convert_date(data[3]));
	  setEmail(data[4]);
	  setPhone(data[5]);
	  setNIT(data[6]);
	  setRol(data[7]);
	});
      }
      Activate(info.data['msm'],'info')
    }catch(e){
      Activate("err: "+e.message,"error");
    }
  }

  const next = ()=>{
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    first.classList.add('change-first');
    second.classList.add('change-second');
  }

  const prev = ()=>{
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    first.classList.remove('change-first');
    second.classList.remove('change-second');
  }

  const convert_date= (str_date)=>{
    var date = new Date(str_date), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  useEffect(()=>{
    get_user_info();
  },[])
  return (
    <>
    <Auth_modal  
      isOpen={modal}
      danger_function={()=>{setModal(false);}} 
      value_function={(value)=>{setPassword_auth(value);}}
      set_value={password_auth}
      success_function={update_user}
     /> 
    <div className="create-container"> 
      <div className="principal-information" id="first"> 
        <img src={logo} alt="" />
       <br/>
       <h1>INFORMACION DEL USUARIO</h1>
       <br/>
        <Input
        input_type="text"
        placeholder_text="Ingrese su nombre"
        get_value={(value)=>{setFirt_name(value);}} 
        input_value={firt_name}
        />
        <Input
         input_type="text"
         placeholder_text="Ingrese sus apellidos"
         get_value={(value)=>{setLast_name(value);}}
         input_value={last_name}
        />
        <Input
         input_type="date"
         placeholder_text="Ingrese fecha de nacimiento"
         get_value={(value)=>{setBirthday(value);}}
         input_value={birthday}
         />
        <Input 
          input_type="email"
          placeholder_text="Ingrese su email"
          get_value={(value)=>{setEmail(value);}}
          input_value={email}
        />
        <Input 
         input_type="number"
         placeholder_text="Ingrese su numero telefonico"
         get_value={(value)=>{setPhone(value);}}
         input_value={phone}
        />
        <Input 
         input_type="number"
         placeholder_text="Ingrese su numero de NIT"
         get_value={(value)=>{setNIT(value);}}
         input_value={NIT}
        />
        <select onChange={(event)=>{setRol(event.target.value);}} className="select">
          <option value="0">Seleccione el rol deseado</option>
          <option value="1">Vendedor</option>
          <option value="2">Administrador</option>
        </select>
        <br/>
        <div className="btn-box">
          <div className="btn-left">
            <Link to={"/ficha-usuario/"+id}><Btn_global btn_type="btn danger" btn_title="Cancelar"/></Link>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={next} btn_type="btn primary" btn_title="Siguiente"/>
          </div>
        </div>
      </div>
      <div className="secondary-information" id="second">
        <img src={user_default} alt="" />
         <br/>
         <br/>
         <h1>INFORMACION DE INICIO DE SESION</h1>
         <br/>
         <br/>
        <Input 
         placeholder_text="Ingrese su nombre de usuario"
         input_type="text"
         get_value={(value)=>{setUser_name(value);}}
         input_value={user_name}
        />
        <Input
         placeholder_text="Ingrese su contraseña"
         input_type="password"
         get_value={(value)=>{setPassword(value);}}
         input_value={password}
        />
        <Input 
         placeholder_text="Confirme su contraseña"
         input_type="password"
         get_value={(value)=>{setPassword_confirm(value);}}
         input_value={password_confirm}
        />
        <div className="btn-box">
          <div className="btn-left">
            <Btn_global btn_function={prev} btn_type="btn danger" btn_title="Regresar"/>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={()=>{setModal(true);}} btn_type="btn success" btn_title="Registrar"/>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
