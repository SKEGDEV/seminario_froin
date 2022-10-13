import Btn_global from '../buttons/global_btn.jsx';
import Input from '../input/input.jsx';
import '../../styles/components/simple_modal.css';
import {useEffect} from 'react'

export default function Auth_modal(props){

  const modal_state = ()=>{
    const modal = document.getElementById('modal');
    if(props.isOpen){
      modal.classList.add('open');
      return;
    }
    modal.classList.remove('open');
  }

  useEffect(()=>{ 
      modal_state(); 
  })

  return(
    <>
    <div className="bg-modal" id="modal">
      <div className="content">
        <div className="content-header-auth">
         <Input
           placeholder_text = "Ingrese su contraseña para confirmar cambios" 
           get_value={props.value_function}
           input_value={props.set_value}
           input_type="password"
          />
        </div>
        <div className="content-footer-auth">
          <div className="btn-box">
            <div className="btn-left"> 
                <Btn_global btn_function={props.danger_function} btn_title="Cancelar" btn_type="btn danger"/> 
            </div>
            <div className="btn-right">
              <Btn_global btn_function={props.success_function}
               btn_title="Autorizar" btn_type="btn success"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
