import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn';
import Private_nav from '../../components/global/navigations/private_nav.jsx';
import Activate from '../../utils/notification.js';
import axios from 'axios';
import {useState} from 'react';
import '../../styles/pages/dashboard.css';

export default function Dashboard(){
  const [init, setInit] = useState("");
  const [finish, setFinish] = useState("");
  const [recive, setRecive] = useState("");
  const [restore, setRestore] = useState("");
  const [diesmo, setDdiesmo] = useState("");

  const calculate = async ()=>{
    if(init == "" && finish == ""){
      Activate("Por favor ingrese todos los campos", "warning");
      return;
    }
    try{
      const data = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_DASHBOARD+init+"/"+finish);
      data.data["restore"].map(d=>{
	setRestore(d[0].toFixed(2));
      })
      data.data["recive"].map(d=>{
	setRecive(d[0].toFixed(2));
      })
      data.data["diesmo"].map(d=>{
	setDdiesmo(d[0].toFixed(2));
      })
      Activate(data.data["msm"],"info");
      setInit("");
      setFinish("");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }
  return(
    <>
    <Private_nav/>
    <div className="dashboard">
      <br/>
      <br/>
      <br/> 
      <h1>DASHBOARD</h1>
      <br/>
      <br/>  
      <div className="header">
        <Input 
         placeholder_text="Ingrese fecha inicial"
         input_type="date"
         input_value={init}
         get_value={(value)=>{setInit(value);}}
        />
        <Input
         placeholder_text="Ingrese fecha final"
         input_type="date"
         input_value={finish}
         get_value={(value)=>{setFinish(value);}}
        />
      </div>
      <Btn_global btn_function={calculate} btn_title="Generar calculo" btn_type="btn success"/>
      <div className="card-container">
      <div className="card">
        <h1>Capital recuperado</h1>
        <br/>
        <br/>
        <br/> 
        <h2>Q.{" "+restore}</h2>
      </div>
      <div className="card">
        <h1>Capital recibido</h1>
        <br/>
        <br/>
        <br/>
        <h2>Q.{" "+recive}</h2>
      </div>
      <div className="card">
        <h1>Diezmo</h1>
        <br/>
        <br/>
        <br/>
        <h2>Q.{" "+diesmo}</h2>
      </div>
    </div>
    <a href="http://192.168.1.10:5000/report/get-morosos" target="_blank"><Btn_global btn_title="Generar PDF clientes morosos" btn_type="btn primary"/></a>
    <a href="http://192.168.1.10:5000/report/get-estasemana" target="_blank"><Btn_global btn_title="Generar PDF clientes pagan esta semana" btn_type="btn primary"/></a>
    <a href="http://192.168.1.10:5000/report/get-nopagan" target="_blank"><Btn_global btn_title="Generar PDF clientes no pagan esta semana" btn_type="btn primary"/></a>
    </div>
</>
  )
}
