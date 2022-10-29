import axios from "axios";
import Activate from './notification.js';

export default class auth_user{

  login_user = async function(username, password){
    const user_search = {
      user_name: username,
      user_password: password
    }
    if(username =="" || password ==""){
      Activate('Por favor ingrese su usuario y contraseña','warning')
      return;
    }
    try{
      const json_response = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_SIGNIN, user_search);
      if('token' in json_response.data){
	Activate('Bienvenido: '+json_response.data['firstname'],'success');	
	localStorage.setItem('token', json_response.data['token']);
	setTimeout(()=>{
	  window.location.replace(process.env.REACT_APP_PC_URL+"usuarios-registrados");
	  return;
	},2000)
      }
      Activate(json_response.data['msm'],'info');
    }catch(e){
      Activate('err: '+e.message,'danger');
    }
  }

}

