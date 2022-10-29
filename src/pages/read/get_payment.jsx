import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import Activate from '../../utils/notification.js';
import '../../styles/pages/payment.css';

export default function Get_payment(){
  const {id,client} = useParams();
  const [name, setName] = useState("");
  const [DPI, setDPI] = useState("");
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState("");
  const [interest, setInterest] = useState("");
  const [ihouse, setIhouse] = useState("");
  const [iitem, setIitem] = useState("");
  const [date, setDate] = useState("");
  const [period, setPeriod] = useState("");
  const [type, setType]=  useState("");

  const convert_date= (str_date)=>{
    var date = new Date(str_date), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const get_payment = async()=>{
    try{
      const obj_payment = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GET_PAYMENT+id);
      if('data' in obj_payment.data){	
	Activate(obj_payment.data["msm"], "success");
	obj_payment.data["data"].map(data=>{
	  setName(data[0]);
	  setDPI(data[1]);
	  setAmount(data[2]);
	  setQuote(data[3]);
	  setInterest(data[4]);
	  setIhouse(data[5]);
	  setIitem(data[6]);
	  setDate(convert_date(data[7]));
	  setPeriod(data[8]);
	  setType(data[9]);
	})
	return;
      }
      Activate(obj_payment.data["msm"], "info");
      setTimeout(()=>{
	window.location.replace(process.env.REACT_APP_PC_URL+"ficha-cliente/"+client)
      },2000)
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }


  const create_payment = async ()=>{
    try{
      const payment = {
	loan:id,
	client:client,
	quote:quote,
	amount:amount,
	interestv:interest,
	interestt:type,
	date:date,
	period:period
      }
      const msm = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_CREATE_PAYMENT, payment); 
      Activate(msm.data["msm"], "info");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }
  useEffect(()=>{
    get_payment();
  },[])

  return(
    <> 
    <div className="payment">
      <br /> 
      <h1>FORMULARIO DE PAGO DE CUOTA</h1>
      <h2>Foto de casa</h2>
      <img src={ihouse} alt=""/>
      <h2>Foto de garantia</h2>
      <img src={iitem} alt=""/>
      <h2>Nombre:{" "+name}</h2>
      <h2>DPI: {" "+DPI}</h2>
      <h2>Monto: Q{amount}</h2>
      <h2>Interes: {" "+interest}</h2>
      <h2>Fecha: {" "+date}</h2>
      <h2>Periodos de pago: {" "+period}</h2>
      <h2>Tipo de interes {" "+type}</h2> 
      <Input
       placeholder_text="Ingrese el monto a pagar"
       input_type="number"
       input_value={quote}
       get_value={(value)=>{setQuote(value);}}
      />
      <div className="btn-box">
        <div className="btn-left">
          <Link to={"/ficha-cliente/"+client}><Btn_global btn_title="Regresar" btn_type="btn danger" /></Link>
        </div>
        <div className="btn-right">
          <Btn_global btn_function={create_payment} btn_title="Realizar pago" btn_type="btn success"/>
        </div>
      </div>
    </div> 
    </>
  )
}
