import Btn_global from '../../components/buttons/global_btn.jsx';
import Simple_modal from '../../components/global/Modal.jsx'; 
import { useParams } from 'react-router-dom';
import '../../styles/pages/record.css';
import Activate from '../../utils/notification';
import axios from 'axios'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import admin_user from '../../utils/obj_admin.js';


export default function Client_redord(){
  
  const {id} = useParams();
  const admin = new admin_user(); 
  const [header, setHeader] = useState([]);
  const [contact, setContact] = useState([]);
  const [footer, setFooter] = useState([]);
  const [references, setReferences] = useState([]);
  const [loans, setLoans] = useState([]);
  const [modal, setModal] = useState(false);

  const get_client_record = async ()=>{
    try{
      const client = await axios.get(process.env.REACT_APP_URL_BASE+process.env.REACT_APP_URL_GETCLIENT+id); 
      setHeader(client.data["header"]);
      setContact(client.data["contact"]);
      setFooter(client.data["footer"]);
      setReferences(client.data["references"])
      setLoans(client.data['loans'])
      Activate(client.data["msm"],"info");
    }catch(e){
      Activate("err: "+e.message, "error");
    }
  }

  useEffect(()=>{
    get_client_record();
  },[])

  return(
    <>
    <Simple_modal 
      modal_question="Esta seguro de inhabilitar este usuario?"
      isOpen={modal}
      danger_function={()=>{setModal(false);}}
      success_function={()=>{admin.disable_user(id);}}
     /> 
    <div className="record">
    {header.map(data=>(
      <div className="record-header">
       <img src={data[2]} alt="" />
       <Btn_global btn_function={()=>{setModal(true);}}  btn_title="Inhabilitar" btn_type="btn danger"/>
       <br/>
       <br/>
        <h1>{data[0]}</h1>
       <br/>
       <br/>
        <h1>Ficha creada por: {" "+data[1]}</h1>
       <br/> 
       <br/>  
      </div>
    ))}
      <div className="record-body">
        <h1>INFORMACION DE CONTACTO</h1>
       <div className="grid-information">
        <div className="left">
          <h3>Telefono de trabajo:</h3>
          <h3>Telefono de casa:</h3>
          <h3>Telefono personal:</h3>
          <h3>Otro numero de telefono:</h3>
          <h3>Correo electronico:</h3>
          <h3>Facebook:</h3> 
        </div>
        {contact.map(data=>(
        <div className="right">
          <h3>{data[0]}</h3>
          <h3>{data[1]}</h3>
          <h3>{data[2]}</h3>
          <h3>{data[3]}</h3>
          <h3>{data[4]}</h3>
          <h3>{data[5]}</h3>
        </div>
	))}
       </div>
      </div>
       <div className="record-body">
        <h1>INFORMACION PERSONAL</h1>
       <div className="grid-information">
        <div className="left">
          <h3>Estado civil:</h3>
          <h3>Tipo de vivienda:</h3>
          <h3>Direccion de trabajo:</h3>
          <h3>Direccion personal:</h3> 
        </div>
        {footer.map(data=>(
        <div className="right">
          <h3>{data[0]}</h3>
          <h3>{data[1]}</h3>
          <h3>{data[2]}</h3>
          <h3>{data[3]}</h3> 
        </div>
	))}
       </div>
      </div>
        <div className="record-body">
        <h1>REFERENCIAS DEL CLIENTE</h1>
        <br/>
        <br/>
        <div className="client-table reference-table">
        <div className="r-h hide"><h4>Nombre</h4></div>
        <div className="r-h"><h4>Apellido</h4></div>
        <div className="r-h hide"><h4>Telefono</h4></div> 
    {references.map(data=>(
    <>
        <div className="r-b hide"><p>{data[1]}</p></div>
        <div className="r-b"><p>{data[2]}</p></div>
        <div className="r-b hide"><p>{data[3]}</p></div>  
    </>
    ))}
      </div>
      </div>
       <div className="record-body">
        <h1>PRESTAMOS DEL CLIENTE</h1>
        <br/>
        <br/>
        <div className="client-table loan-table">
        <div className="r-h hide"><h4>Monto</h4></div>
        <div className="r-h"><h4>Cuota</h4></div>
        <div className="r-h hide"><h4>Cuotas pagadas</h4></div> 
        <div className="r-h hide"><h4>Fecha de pago</h4></div>
        <div className="r-h hide"><h4>Pagar</h4></div>
        <div className="r-h">
          <h4>Historial</h4>
        </div>
    {loans.map(data=>(
    <>
        <div className="r-b hide"><p>{data[1]}</p></div>
        <div className="r-b"><p>{data[2]}</p></div>
        <div className="r-b hide"><p>{data[3]}</p></div>  
        <div className="r-b hide"><p>{data[4]}</p></div>
        <div className="r-b hide"><Link to={"/ver-pago/"+data[0]+"/"+id}><Btn_global btn_title="Pagar" btn_type="btn primary"/></Link></div>
        <div className="r-b">
          <Link to={"/historial/"+data[0]+"/"+id}>
            <Btn_global btn_title="Historial" btn_type="btn primary"/>
          </Link>
        </div>
    </>
    ))}
      </div>
      </div>
      <div className="record-footer">
        <div className="btn-box">
          <div className="btn-left">
            <Link to="/clientes-registrados"><Btn_global btn_title="Regresar" btn_type="btn warning"/></Link>
          </div>
          <div className="btn-right">
            <Link to={"/actualizar-usuario/"+id}> 
	     <Btn_global btn_title="Actualizar informacion" btn_type="btn primary"/>
	   </Link>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
