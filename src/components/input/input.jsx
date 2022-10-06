import '../../styles/components/input/input.css'

export default function Input(props){

return(
  <div className="input-box">
     <input type={props.input_type}
       name="name" className="question" id="nme"
       required autocomplete="Off"
       onChange={(event)=>{props.get_value(event.target.value)}}
       value={props.input_value}
     /> 
     <label for="nme"><span>{props.placeholder_text}</span></label> 
  </div>
)
}
