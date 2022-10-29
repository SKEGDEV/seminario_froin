import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn';
import logo from '../../img/logo.png'
import user_default from '../../img/user_default.png';
import '../../styles/pages/create.css'
import '../../styles/components/references.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Activate from '../../utils/notification.js';
import axios from 'axios';

export default function Create_client(){ 
  const [client_photo, setClient_photo] = useState("");
  //client data
  const [client_dpi, setClient_dpi] = useState("");
  const [client_firstname, setClient_firstname] = useState("");
  const [client_lastname, setClient_lastname] = useState("");
  const [client_workphone, setClient_workphone] = useState("");
  const [client_homephone, setCllient_homephone] = useState("");
  const [client_personalphone, setClient_personalphone] = useState("");
  const [client_otherphone, setClient_otherphone] = useState("");
  const [client_isMarried, setClient_isMarried] = useState(false);
  const [client_isRented, setClient_isRented] = useState(false);
  const [client_workDirection, setClient_workDirection]= useState("");
  const [client_homeDirection, setClient_homeDirection]= useState("");
  const [client_email, setClient_email]= useState("");
  const [client_facebook, setClient_facebook]= useState("");

  //References data
  const [first_name, setFirt_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState(""); 
  const [data, setData] = useState([]);
 

  const add_reference = ()=>{
    if(first_name != "" && last_name != "" && phone != ""){ 
      data.push({
	"first_name":first_name,
	"last_name":last_name,
	"phone":phone
      });
      console.log(data);
      Activate("Se ha agregado la referencia con exito", "success");
      setFirt_name("");
      setLast_name("");
      setPhone("");
      return;
    }
    Activate("Por favor ingrese todos los datos del formulario", "warning");
  }



  const convert_base64 = (photo)=>{
    var reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = ()=>{
      setClient_photo(reader.result);
    };
    reader.onerror = error=>{
      Activate("err: "+error.message, "error");
    };
  }


  const create_client = async()=>{
    const new_client={
	token:localStorage.getItem("token"),
        references:data,
        dpi:client_dpi,
        first_name:client_firstname,
        last_name:client_lastname,
        work_phone:client_workphone,
        home_phone:client_homephone,
        personal_phone:client_personalphone,
        other_phone:client_otherphone,
        isMarried:client_isMarried,
        isRented:client_isRented,
        work_direction:client_workDirection,
        home_direction:client_homeDirection,
        email:client_email,
        facebook:client_facebook, 
        photo:client_photo,
    }
    console.log(client_isMarried);
    try{ 
      const msm = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_CREATEC, new_client)
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"clientes-registrados")
      },2000)
    }catch(e){
      Activate("err: "+e.message, "error");
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

  useEffect(()=>{
    setClient_photo(user_default);
  },[])
  return (
    <> 
    <div className="create-container"> 
      <div className="principal-information" id="first"> 
        <img src={logo} alt="" />
       <br/>
       <h1>INFORMACION DEL CLIENTE</h1>
       <br/>
        <Input
        placeholder_text="Ingrese su DPI"
        input_type="number"
        get_value={(value)=>{setClient_dpi(value);}}
        input_value={client_dpi}
        />
        <Input
        placeholder_text="Ingrese sus nombres"
        input_type="text"
        get_value={(value)=>{setClient_firstname(value);}}
        input_value={client_firstname}
        />
        <Input
         placeholder_text="Ingrese sus apellidos"
         input_type="text"
         get_value={(value)=>{setClient_lastname(value);}}
         input_value={client_lastname}
        />
        <Input
         placeholder_text="Ingrese numero telefonico de trabajo"
         input_type="number"
          get_value={(value)=>{setClient_workphone(value);}}
         input_value={client_workphone}
        />
        <Input
         placeholder_text="Ingrese numero telefonico de casa"
         input_type="number"
         get_value={(value)=>{setCllient_homephone(value);}}
         input_value={client_homephone}
        />
        <Input
         placeholder_text="Ingrese numero telefonico personal"
         input_type="number"
         get_value={(value)=>{setClient_personalphone(value);}}
         input_value={client_personalphone}
        />
        <Input 
         placeholder_text="Ingrese otro algun otro numero telefonico"
         input_type="number"
         get_value={(value)=>{setClient_otherphone(value);}}
         input_value={client_otherphone}
        />
        <label className="checkbox">
         <input onChange={(event)=>{setClient_isMarried(event.target.checked);}} value={client_isMarried} type="checkbox"/>
         Esta casado?
        </label>
        <label className="checkbox">
         <input onChange={(event)=>{setClient_isRented(event.target.checked);}} value={client_isRented} type="checkbox"/>
         Alquila?
	</label>
        <Input
         placeholder_text="Ingrese direccion de trabajo"
         input_type="text"
         get_value={(value)=>{setClient_workDirection(value);}}
         input_value={client_workDirection}
        />
        <Input 
         placeholder_text="Ingrese direccion personal"
         input_type="text"
         get_value={(value)=>{setClient_homeDirection(value);}}
         input_value={client_homeDirection}
        />
        <Input 
         placeholder_text="Ingrese correo electronico"
         input_type="email"
         get_value={(value)=>{setClient_email(value);}}
         input_value={client_email}
        />
        <Input 
         placeholder_text="Ingrese URL de Facebook"
         input_type="url"
         get_value={(value)=>{setClient_facebook(value);}} 
         input_value={client_facebook}
        />
        <br/>
        <div className="btn-box">
          <div className="btn-left">
            <Link to="/clientes-registrados"><Btn_global btn_type="btn danger" btn_title="Cancelar"/></Link>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={next} btn_type="btn primary" btn_title="Siguiente"/>
          </div>
        </div>
      </div>
      <div className="secondary-information" id="second">
        <img src={client_photo} alt="none" className="client-photo" />
         <br/>
         <br/>
         <h1>REFERENCIAS Y FOTO DEL CLIENTE</h1>
         <br/>
         <br/> 
        <input onChange={(event)=>{convert_base64(event.target.files[0]);}} className="photo-picker" type="file" accept="image/*" />
     <div className="reference-container">
      <h1>REFERENCIAS DEL CLIENTE</h1>
      <br/>
      <br/>
      <Input
       input_type="text"
       placeholder_text="Ingrese nombres"
       get_value={(value)=>{setFirt_name(value);}}
       input_value={first_name}
       />
      <Input 
       input_type="text"
       placeholder_text="Ingrese apellidos"
       get_value={(value)=>{setLast_name(value);}}
       input_value={last_name}
       />
      <Input
       input_type="number"
       placeholder_text="Ingrese numero telefonico"
       get_value={(value)=>{setPhone(value);}}
       input_value={phone}
      />
      <Btn_global btn_function={add_reference} btn_title="Guardar referencia" btn_type="btn success"/>
    </div>
        <div className="btn-box">
          <div className="btn-left">
            <Btn_global btn_function={prev} btn_type="btn danger" btn_title="Regresar"/>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={create_client} btn_type="btn success" btn_title="Registrar"/>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
