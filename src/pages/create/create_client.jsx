import Input from '../../components/input/input.jsx';
import Btn_global from '../../components/buttons/global_btn.jsx';
import '../../styles/pages/create.css';

export default function Create_client(){
  return(
    <div className="create-client">
    <div className="header">
      <h1>BIENVENIDO</h1>
      <h3>CREAR CLIENTE</h3>
    </div>
    <Input input_type="number" placeholder_text = "Ingrese su DPI *"/>
    <Input input_type="text" placeholder_text = "Ingrese su nombre *"/>
    <Input input_type="text" placeholder_text = "Ingrese sus apellidos *"/>
    <Input input_type="number" placeholder_text = "Ingrese su telefono de trabajo *"/>
    <Input input_type="number" placeholder_text = "Ingrese su telefono domiciliar *"/>
    <Input input_type="number" placeholder_text = "Ingrese su numero celular *"/>
    <Input input_type="number" placeholder_text = "Otros"/>
    <Input input_type="text" placeholder_text = "Ingrese su lugar de trabajo *"/>
    <Input input_type="text" placeholder_text = "Ingrese su direccion personal *"/>
    <Input input_type="text" placeholder_text = "Ingrese su direccion de trabajo *"/>
    <div className="btn-box">
      <div className="btn-left">
        <Btn_global btn_title="Cancelar" btn_type="btn danger"/>
      </div>
      <div className="btn-right">
        <Btn_global btn_title = "Guardar cliente" btn_type="btn success"/>
      </div>
    </div>
    </div>
  )
}
