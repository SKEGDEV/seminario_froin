import {MdLogin} from 'react-icons/md'
import '../../styles/components/buttons/login.css'

export default function Btn_login(props){
  return(
    <button onClick={props.btn_function} className="btn-login">
       {props.title}
       <MdLogin className="icon"/>
    </button>
  )
}
