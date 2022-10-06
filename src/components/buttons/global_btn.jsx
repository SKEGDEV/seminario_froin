import '../../styles/components/buttons/global_btn.css'
// btn_type = "btn succes,warning,danger,primary"

export default function Btn_global(props){
  return(
    <button onClick={props.btn_function} className={props.btn_type}>
      {props.btn_title} 
    </button>
  )
}
