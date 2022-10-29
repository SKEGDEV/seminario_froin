import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import Private_nav from '../../components/global/navigations/private_nav.jsx';
import Activate from '../../utils/notification.js';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Clients(){
  const [clients, setClients] = useState([]);
  const [clients_temp, setClients_temp] = useState([]);

  const get_clients = async()=>{
    try{
      const get_token = {
	token:localStorage.getItem('token')
      }
      const clients = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETCLIENTS, get_token);
      if('data' in clients.data){
      setClients(clients.data['data']);
      setClients_temp(clients.data['data']);
      }
      Activate(clients.data['msm'], "info");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  const filter = (search)=>{
    if(search != ""){
      var expression = new RegExp(`${search}.*`, "i");
      var new_clients = clients.filter(client=> expression.test(client[2]));
      setClients(new_clients);
      return;
    }
    if(search == ""){
      setClients(clients_temp);
      return;
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
        <div className="btn-box">
          <div className="btn-left">
            <Link to="/crear-cliente"><Btn_global btn_title="Agregar cliente" btn_type="btn success"/></Link>
          </div>
          <div className="btn-right">
            <Btn_global btn_title="Clientes inactivos" btn_type="btn warning"/>
          </div>
        </div>
         <div className="search-box">
           <Input get_value={(value)=>{filter(value);}} placeholder_text="Buscar..." input_type="text"/>
         </div>
      </div>
      <div className="client-table">
        <div className="r-h hide"><h4>DPI</h4></div>
        <div className="r-h"><h4>Nombres</h4></div>
        <div className="r-h hide"><h4>Apellidos</h4></div>
        <div className="r-h hide"><h4>Telefono</h4></div>
        <div className="r-h"><h4>Foto</h4></div> 
        <div className="r-h"><h4>Seleccionar</h4></div>
    {clients.map(data=>(
    <>
        <div className="r-b hide"><p>{data[1]}</p></div>
        <div className="r-b"><p>{data[2]}</p></div>
        <div className="r-b hide"><p>{data[3]}</p></div> 
        <div className="r-b hide"><p>{data[4]}</p></div>
        <div className="r-b"><img src={data[5]} alt="none"/></div> 
        <div className="r-b"><Link to={"/ficha-cliente/"+data[0]}><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></Link></div>
    </>
    ))}
      </div>
    </div>
    </>
  )
}
