import {toast} from 'react-toastify'

export default function Activate(msm, noti_type){
  toast(msm,{
    position: 'bottom-right',
    type:noti_type,
    theme:'dark',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined
  }); 
}

/*
 * notification type:
 * -info
 * -success
 * -warning
 * -error
 * -default
 *
 *notification theme:
 * -light
 * -dark
 * -colored
 * */
