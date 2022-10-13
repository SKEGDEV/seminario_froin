import Btn_global from '../buttons/global_btn.jsx';
import '../../styles/components/simple_modal.css';
import {useEffect} from 'react'

export default function Simple_modal(props){

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
        <div className="content-header">
          <h1>{props.modal_question}</h1>
        </div>
        <div className="content-footer">
          <div className="btn-box">
            <div className="btn-left"> 
                <Btn_global btn_function={props.danger_function} btn_title="No" btn_type="btn danger"/> 
            </div>
            <div className="btn-right">
              <Btn_global btn_function={props.success_function}
               btn_title="Si" btn_type="btn success"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

}
