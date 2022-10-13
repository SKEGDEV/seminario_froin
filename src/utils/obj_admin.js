import axios from 'axios'
import Activate from './notification.js'

export default class admin_user{
  create_user = async function(username,password,firstname,lastname
  ,birthday, email, phone, nit, rol){
    if(username == ""|| password == ""|| firstname == ""|| lastname == "" || birthday == ""|| email == "" || email == ""|| phone == "" || nit == "" || rol == ""){
      Activate("Todos los campos son requeridos por favor llenelos todos", "warning");
      return;
    }
    try{
      const new_user = {
      user_name:username,
      user_password:password,
      first_name:firstname,
      last_name:lastname,
      birthday:birthday,
      email:email,
      phone:phone,
      nit:nit,
      rol:rol
      }
      const msm = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_CREATEU, new_user )
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"usuarios-registrados");
      },2000) 
    }catch(e){
      Activate("err: "+e.message,"error");
    }
  }

  disable_user = async function(id){
    try{
      const msm = await axios.delete(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_DISABLEU+id);
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"usuarios-registrados");
      },2000) 
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }
  update_user = async function(auth_name, auth_password, id,username,password,firstname,lastname
  ,birthday, email, phone, nit, rol){
    if(username == "" || firstname == ""|| lastname == "" || birthday == ""|| email == "" || email == ""|| phone == "" || nit == "" || rol == ""){
      Activate("Todos los campos son requeridos por favor llenelos todos", "warning");
      return;
    }
    try{
      if (password == ""){
	password = "no password update"
      }
     const new_user = {
      id_user: id,
      user_name:username,
      user_password:password,
      first_name:firstname,
      last_name:lastname,
      birthday:birthday,
      email:email,
      phone:phone,
      nit:nit,
      rol:rol
      }
      const msm = await axios.put(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_UPDATEU, new_user )
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"usuarios-registrados");
      },2000)  
    }catch(e){
      Activate("err: "+e.message,"error");
    }
  }
 enable_user = async function(id){
    try{
      const msm = await axios.delete(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_ENABLEU+id);
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"usuarios-registrados");
      },2000) 
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

}

 
