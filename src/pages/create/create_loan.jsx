import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn';
import logo from '../../img/logo.png'
import user_default from '../../img/user_default.png';
import '../../styles/pages/create.css'
import '../../styles/components/references.css';
import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Activate from '../../utils/notification.js';
import axios from 'axios';

export default function Create_loan(){ 
  const [house_photo, setHouse_photo] = useState(""); 
  const [objPhoto, setObjPhoto] = useState("");
  const [client_id, setClient_id] = useState("");
  const [clients, setClients] = useState([]);
  const [clients_temp, setClients_temp] = useState([]);
  const {amount, quote, date, interest, period, type_interest} = useParams(); 

  const filter = (search)=>{
    if(search != ""){
      var expression = new RegExp(`${search}.*`, "i");
      var new_clients = clients.filter(client=> expression.test(client[1]));
      setClients(new_clients);
      return;
    }
    if(search == ""){
      setClients(clients_temp);
      return;
    }
    
  }
  const get_clients = async()=>{
    try{
      const clients = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GET_ALLCLIENTS);
      if('clients' in clients.data){
      setClients(clients.data['clients']);
      setClients_temp(clients.data['clients']);
      }
      Activate(clients.data['msm'], "info");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  const convert_House_base64 = (photo)=>{
    var reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = ()=>{
      setHouse_photo(reader.result);
    };
    reader.onerror = error=>{
      Activate("err: "+error.message, "error");
    };
  }

  const convert_Obj_base64 = (photo)=>{
    var reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onload = ()=>{
      setObjPhoto(reader.result);
    };
    reader.onerror = error=>{
      Activate("err: "+error.message, "error");
    };
  }

  const create_loan = async()=>{ 
    const loan={
      client_id:client_id,
      amount:amount,
      quote:quote,
      car_photo:objPhoto,
      house_photo:house_photo,
      first_payment_date:date,
      interest:interest,
      interest_type:type_interest,
      period_payment:period 
    }
    try{ 
      const msm = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GET_CREATE_LOAN,loan)
      Activate(msm.data["msm"],"info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"prestamos")
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
    setHouse_photo(user_default);
    setObjPhoto(user_default);
    get_clients();
  },[])
  return (
    <> 
    <div className="create-container"> 
      <div className="principal-information" id="first"> 
        <img src={logo} alt="" />
       <br/>
       <h1>SELECCIONAR CLIENTE</h1>
       <br/>
    <div className="clients">
      <div className="header"> 
         <br />
         <br /> 
         <div className="search-box">
           <Input get_value={(value)=>{filter(value);}} placeholder_text="Buscar..." input_type="text"/>
         </div>
      </div>
      <div className="client-table client-loan">
        <div className="r-h hide"><h4>Nombre</h4></div>
        <div className="r-h"><h4>DPI</h4></div>
        <div className="r-h"><h4>Foto</h4></div> 
        <div className="r-h"><h4>Seleccionar</h4></div>
    {clients.map(data=>(
    <>
        <div className="r-b hide"><p>{data[1]}</p></div>
        <div className="r-b"><p>{data[2]}</p></div> 
        <div className="r-b"><img className="img-loan" src={data[4]} alt="none"/></div> 
        <div className="r-b"><Btn_global btn_function={()=>{setClient_id(data[0]);Activate("Cliente seleccionado","info");}} btn_title="Seleccionar" btn_type="btn primary"/></div>
    </>
    ))}
      </div>
    </div>

        <br/>
        <div className="btn-box">
          <div className="btn-left">
            <Link to="/prestamos"><Btn_global btn_type="btn danger" btn_title="Cancelar"/></Link>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={next} btn_type="btn primary" btn_title="Siguiente"/>
          </div>
        </div>
      </div>
      <div className="secondary-information" id="second">
          <h1>FOTO OBJETO DE GARANTIA</h1>
         <br/>
         <br/> 
         <img src={objPhoto} alt="none" className="client-photo" />
         <br/>
         <br/>
        <input onChange={(event)=>{convert_Obj_base64(event.target.files[0]);}} className="photo-picker" type="file" accept="image/*" />
         <br/>
         <br/>
         <h1>FOTO OBJETO DE CASA</h1>
         <br/>
         <br/>
        <img src={house_photo} alt="none" className="client-photo" />
         <br/>
         <br/>
        <input onChange={(event)=>{convert_House_base64(event.target.files[0]);}} className="photo-picker" type="file" accept="image/*" />
         <br/>
         <br/>
        <div className="btn-box">
          <div className="btn-left">
            <Btn_global btn_function={prev} btn_type="btn danger" btn_title="Regresar"/>
          </div>
          <div className="btn-right">
            <Btn_global btn_function={create_loan} btn_type="btn success" btn_title="Registrar"/>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
