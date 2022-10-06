import Input from '../../components/input/input.jsx';
import logo from '../../img/logo.png';
import Btn_login from '../../components/buttons/login_btn.jsx';
import Btn_global from '../../components/buttons/global_btn';
import '../../styles/pages/login.css'
import Public_nav from '../../components/global/navigations/public_navigation.jsx';
import auth_user from '../../utils/obj_auth.js'
import { useState } from 'react';

export default function Login(){
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");

  const get_user_name = (value)=>{
    setUser_name(value);
  }
  
  const get_password = (value)=>{
    setPassword(value);
  }

  const login_user = ()=>{
    const auth = new auth_user();
    auth.login_user(user_name, password);
    setPassword("");
    setUser_name("");
  }
  return (
    <>
    <Public_nav isActive="not"/>
    <div className="Login">
       
      <div className="header">
        <div className="bg-header">
          <img src={logo} alt="no image" />
          <h1>BIENVENIDO</h1>
          <h4>INCIO DE SESION</h4>
        </div> 
      </div> 
      <Input 
        input_type="text"
        placeholder_text= "Ingrese su nombre de usuario *"
        get_value={get_user_name}
        input_value={user_name}
        />
      <br />
      <Input 
        input_type="password" 
        placeholder_text= "Ingrese su contraseña *"
        get_value={get_password}
        input_value={password}
        />
      <br />
      <br /> 
      <div className="btn-box">
        <div className="btn-left">
          <Btn_global btn_title="Cancelar" btn_type="btn danger"/>
        </div>
        <div className="btn-right">
          <Btn_login btn_function={login_user} title="Iniciar sesion"/>
        </div>
      </div>
    </div>
    </>
  );
}
