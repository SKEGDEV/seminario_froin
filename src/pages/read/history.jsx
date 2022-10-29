import axios from 'axios';
import Btn_global from '../../components/buttons/global_btn.jsx';
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import Activate from '../../utils/notification.js';

export default function History(){
  const [payments, setPayments] = useState([]);
  const {id, client} = useParams();

  const get_payments = async ()=>{
    try{
      const json = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GET_PAYMENTS+id);
      if('data' in json.data){
	setPayments(json.data["data"]);
	Activate(json.data["msm"], "success");
	return;
      }
      Activate(json.data["msm"], "warning");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  useEffect(()=>{
    get_payments();
  },[])

  return(
    <>
        <br/>
        <br/>
        <br/> 
        <br/>
        <br/> 
        <div className="client-table reference-table">
        <div className="r-h hide"><h4>Fecha de pago</h4></div>
        <div className="r-h"><h4>Capital abonado</h4></div>
        <div className="r-h hide"><h4>Monto pagado</h4></div> 
    {payments.map(data=>(
    <>
        <div className="r-b hide"><p>{data[0]}</p></div>
        <div className="r-b"><p>{data[1]}</p></div>
        <div className="r-b hide"><p>{data[2]}</p></div>  
    </>
    ))}
      </div>
     <br />
     <br />
     <Link to={"/ficha-cliente/"+client}><Btn_global btn_type="btn danger" btn_title="Regresar"/></Link>
    </>
  )
}
