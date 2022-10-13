import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../pages/auth/signin.jsx'; 
import Users from '../pages/read/user_page.jsx'
import Homepage from '../pages/public/landing.jsx';
import Create_user from '../pages/create/create_user.jsx';
import User_record from '../pages/read/user_record.jsx';
import Update_user from '../pages/update/update_user.jsx';
import Users_disble from '../pages/read/users_disable.jsx';
import App from '../App.js'

export default function Router_func(){
  return(
    <>
    <ToastContainer/>
     <Router>
       <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/iniciar-sesion" element={<Login/>}/> 
        <Route path="/usuarios-inactivos" element={<Users_disble/>}/>
        <Route path="/usuarios-registrados" element={<Users />}/>
        <Route path="/ficha-usuario/:id" element={<User_record/>}/>
        <Route path="/actualizar-usuario/:id" element={<Update_user/>}/>
        <Route path="/crear-usuario" element={<Create_user/>}/>
        <Route path="/test-components" element={<App/>}/>
       </Routes>
     </Router>
    </>
  )
}
