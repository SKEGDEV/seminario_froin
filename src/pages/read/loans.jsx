import Private_nav from '../../components/global/navigations/private_nav.jsx';
import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import Activate from '../../utils/notification.js';
import {useState} from 'react';
import axios from 'axios';
import '../../styles/components/calculator.css';

export default function Loans(){
  const [loan_proyection, setLoan_proyection] = useState([]);
  const [init_amount, setInit_amount] = useState("");
  const [expected_quote, setExpected_quote] = useState("");
  const [static_interest, setStatic_interest] = useState("");
  const [payment_frequency, setPayment_frequency] = useState("0");
  const [first_date_payment, setFirst_date_payment] = useState("");
  const [total, setTotal] = useState("0");
  const [porcentage_interest, setPorcentage_interest] = useState("0");

  const go_to_create_loan = ()=>{
    var interest = 0;
    var interest_type = "";
    if(porcentage_interest != "0"){
      interest = porcentage_interest;
      interest_type="P"
    }
    else{
      interest = static_interest;
      interest_type="F"
    }

    window.location.replace(
      process.env.REACT_APP_PC_URL
      +"crear-prestamo/"
      +init_amount+"/"
      +expected_quote+"/"
      +first_date_payment+"/"
      +interest+"/"
      +payment_frequency+"/"
      +interest_type
    );
  }

  const create_pdf_proyection = async()=>{
    const proyection_info = {
      proyection:loan_proyection,
      total:total
    }
    try{
      const get_pdf = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_PROYECTION_PDF, proyection_info) 
      Activate(get_pdf.data["msm"], 'info');
      console.log(get_pdf)
      window.open(get_pdf.data["url"], '_blank');
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  const create_proyection = async()=>{
    var interest = static_interest;
    var type_interest= 2;
    if(expected_quote == "" || init_amount == "" || payment_frequency == "0" || first_date_payment == ""){
      Activate("por favor ingrese todos los campos solicitados", "warning");
      return;
    }
    if((porcentage_interest == "0" && static_interest == "") || (porcentage_interest != "0" && static_interest != "")){
      Activate("Por favor llene un unico tipo de interes", "warning")
      return;
    }
    if(porcentage_interest != "0" && static_interest == ""){
      type_interest=1;
      interest = porcentage_interest;
    } 
    const proyection={
      init_amount:init_amount,
      quote_amount:expected_quote,
      interest:interest,
      first_payment_date:first_date_payment,
      payment_frecuency:payment_frequency,
      type_interest:type_interest
    }
    try{
      const response = await axios.post(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GET_PROYECTION,proyection)
      if('proyection' in response.data){
	console.log(response.data['proyection']);
	setLoan_proyection(response.data['proyection']);
	setTotal(response.data["total"]);
	Activate(response.data["msm"],"success");
	return;
      }
      Activate(response.data["msm"]);
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  return(
    <>
      <Private_nav/>  
       <div className="clients">
      <div className="header"> 
        <Btn_global btn_function={go_to_create_loan} btn_title="Crear prestamo" btn_type="btn success"/>
        <div className="create-interest">
          <br/>
          <br/>
          <h1>COTIZAR PRESTAMO</h1>
          <br/>
          <br/>
          <Input 
           placeholder_text="Monto inicial"
           input_type="number"
           get_value={(value)=>{setInit_amount(value);}}
           input_value={init_amount}
          />
          <Input 
           placeholder_text="Cuota deseada"
           input_type="number"
           get_value={(value)=>{setExpected_quote(value);}}
           input_value={expected_quote}
          />
          <Input 
           placeholder_text="Interes fijo"
           input_type="number"
           get_value={(value)=>{setStatic_interest(value);}}
           input_value={static_interest}
          />
          <Input
           placeholder_text="Ingrese su fecha inicial de pago"
           input_type="date"
           get_value={(value)=>{setFirst_date_payment(value);}}
           input_value={first_date_payment}
          />
           <select onChange={(event)=>{setPorcentage_interest(event.target.value);}}>
             <option value="0">Seleccione un porcentaje de interes</option>
             <option value="0.01">1%</option>
             <option value="0.02">2%</option>
             <option value="0.03">3%</option>
             <option value="0.04">4%</option>
             <option value="0.05">5%</option>
             <option value="0.06">6%</option>
             <option value="0.07">7%</option>
             <option value="0.08">8%</option>
             <option value="0.09">9%</option>
             <option value="0.10">10%</option>
           </select>
           <select onChange={(event)=>{setPayment_frequency(event.target.value);}}>
             <option value="0">Seleccione peridos de pago</option>
             <option value="M">Mensual</option>
             <option value="S">Semanal</option>
             <option value="Q">Quincenal</option>
           </select>
          <div className="btn-box"><div className="btn-left">
              <Btn_global btn_function={create_pdf_proyection} btn_title="Descargar PDF cotizacion" btn_type="btn success" />
            </div><div className="btn-right">
              <Btn_global btn_function={create_proyection} btn_title="Generar cotizacion" btn_type="btn success"/>
            </div></div> 
        </div>
      </div>
      <div className="client-table">
        <div className="r-h hide"><h4>No.</h4></div>
        <div className="r-h"><h4>Fecha de pago</h4></div>
        <div className="r-h hide"><h4>Cuota</h4></div>
        <div className="r-h hide"><h4>Interes</h4></div>
        <div className="r-h"><h4>Capital</h4></div> 
        <div className="r-h"><h4>Saldo</h4></div>
         {loan_proyection.map(data=>(
        <>
          <div className="r-b hide"><p>{data["no"]}</p></div>
          <div className="r-b"><p>{data["payment_date"]}</p></div>
          <div className="r-b hide"><p>Q.{data["quote"]}</p></div> 
          <div className="r-b hide"><p>Q.{data["interest"]}</p></div>
          <div className="r-b"><p>Q.{data["capital"]}</p></div> 
          <div className="r-b"><p>Q.{data["amount"]}</p></div>
        </>
	 ))}
          <div className="r-b hide"><p>Total:</p></div>
          <div className="r-b"><p></p></div>
          <div className="r-b hide"><p></p></div> 
          <div className="r-b hide"><p></p></div>
          <div className="r-b"><p></p></div> 
          <div className="r-b"><p>Q.{total}</p></div>
      </div>
    </div>

    </>
  )
}

