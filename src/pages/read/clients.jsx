import Btn_global from '../../components/buttons/global_btn.jsx';
import Input from '../../components/input/input.jsx';
import '../../styles/pages/read.css';

export default function Clients(){
  return(
    <div class="clients">
      <div class="header"> 
        <div class="btn-box">
          <div class="btn-left">
            <Btn_global btn_title="Agregar cliente" btn_type="btn success"/>
          </div>
          <div class="btn-right">
            <Btn_global btn_title="Clientes inactivos" btn_type="btn warning"/>
          </div>
        </div>
         <div className="search-box">
           <Input placeholder_text="Buscar..." input_type="text"/>
         </div>
      </div>
      <div class="client-table">
        <div class="r-h hide"><h4>DPI</h4></div>
        <div class="r-h"><h4>Nombres</h4></div>
        <div class="r-h hide"><h4>Apellidos</h4></div>
        <div class="r-h hide"><h4>Telefono</h4></div>
        <div class="r-h"><h4>Foto</h4></div> 
        <div class="r-h"><h4>Seleccionar</h4></div>
        <div class="r-b hide"><p>Texto1</p></div>
        <div class="r-b"><p>Texto1</p></div>
        <div class="r-b hide"><p>Texto1</p></div> 
        <div class="r-b hide"><p>Texto1</p></div>
        <div class="r-b"><p>Texto1 este es un texto largo</p></div> 
        <div class="r-b"><Btn_global btn_title="Seleccionar" btn_type="btn primary"/></div>
      </div>
    </div>
  );
}
