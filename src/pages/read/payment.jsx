import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn';
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import Activate from '../../utils/notification.js';
import Private_nav from '../../components/global/navigations/private_nav.jsx';

export default function Payment(){
  const [clients, setClients] = useState([]);
  const [clients_temp, setClients_temp] = useState([]);

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

  useEffect(()=>{
    get_clients();
  },[])

  return(
    <>
    <Private_nav/>
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
        <div className="r-b"><Link to={"/ficha-cliente/"+data[0]}><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></Link></div>
    </>
    ))}
      </div>
    </div>
    </>
  )
}
