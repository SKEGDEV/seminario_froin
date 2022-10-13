import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import '../../styles/pages/read.css';

export default function Global_tables(props){
  if(props.read_table = "client"){
    return (<Clients/>)
  }
  if(props.read_table = "user"){
    return (<Users/>)
  }
  return(<></>)
}

function Clients(){
  return(
    <div className="clients">
      <div className="header"> 
        <div className="btn-box">
          <div className="btn-left">
            <Btn_global btn_title="Agregar cliente" btn_type="btn success"/>
          </div>
          <div className="btn-right">
            <Btn_global btn_title="Clientes inactivos" btn_type="btn warning"/>
          </div>
        </div>
         <div className="search-box">
           <Input placeholder_text="Buscar..." input_type="text"/>
         </div>
      </div>
      <div className="client-table">
        <div className="r-h hide"><h4>DPI</h4></div>
        <div className="r-h"><h4>Nombres</h4></div>
        <div className="r-h hide"><h4>Apellidos</h4></div>
        <div className="r-h hide"><h4>Telefono</h4></div>
        <div className="r-h"><h4>Foto</h4></div> 
        <div className="r-h"><h4>Seleccionar</h4></div>
        <div className="r-b hide"><p>Texto1</p></div>
        <div className="r-b"><p>Texto1</p></div>
        <div className="r-b hide"><p>Texto1</p></div> 
        <div className="r-b hide"><p>Texto1</p></div>
        <div className="r-b"><p>Texto1 este es un texto largo</p></div> 
        <div className="r-b"><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></div>
      </div>
    </div>
  )
}

function Users(){
  return(
    <div className="clients">
      <div className="header"> 
        <div className="btn-box">
          <div className="btn-left">
            <Btn_global btn_title="Agregar Usuario" btn_type="btn success"/>
          </div>
          <div className="btn-right">
            <Btn_global btn_title="Usuarios inactivos" btn_type="btn warning"/>
          </div>
        </div>
         <div className="search-box">
           <Input placeholder_text="Buscar..." input_type="text"/>
         </div>
      </div>
      <div className="client-table">
        <div className="r-h hide"><h4>Nombres</h4></div>
        <div className="r-h"><h4>Usuario</h4></div>
        <div className="r-h hide"><h4>Telefono</h4></div>
        <div className="r-h hide"><h4>Rol</h4></div>
        <div className="r-h"><h4>Estado</h4></div> 
        <div className="r-h"><h4>Seleccionar</h4></div>
        <div className="r-b hide"><p>Texto1</p></div>
        <div className="r-b"><p>Texto1</p></div>
        <div className="r-b hide"><p>Texto1</p></div> 
        <div className="r-b hide"><p>Texto1</p></div>
        <div className="r-b"><p>Texto1 este es un texto largo</p></div> 
        <div className="r-b"><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></div>
      </div>
    </div>
  )
}
