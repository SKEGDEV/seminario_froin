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
import Create_client from '../pages/create/create_client.jsx';
import Clients from '../pages/read/clients.jsx';
import Client_record from '../pages/read/client_record.jsx';
import Loans from '../pages/read/loans.jsx';
import Create_loan from '../pages/create/create_loan.jsx';
import Get_payment from '../pages/read/get_payment.jsx';
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
        <Route path="/prestamos" element={<Loans/>}/>
        <Route path="/crear-prestamo/:amount/:quote/:date/:interest/:period/:type_interest" element={<Create_loan/>}/>
        <Route path="/ficha-usuario/:id" element={<User_record/>}/>
        <Route path="/ficha-cliente/:id" element={<Client_record/>}/>
        <Route path="/actualizar-usuario/:id" element={<Update_user/>}/>
        <Route path="/crear-usuario" element={<Create_user/>}/>
        <Route path="/ver-pago/:id/:client" element={<Get_payment/>}/>
        <Route path="/crear-cliente" element={<Create_client/>}/>
        <Route path="/clientes-registrados" element={<Clients/>}/>
        <Route path="/test-components" element={<App/>}/>
       </Routes>
     </Router>
    </>
  )
}
