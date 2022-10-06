import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../pages/auth/signin.jsx';
import Clients from '../pages/read/clients.jsx';
import Homepage from '../pages/public/landing.jsx';
import App from '../App.js'

export default function Router_func(){
  return(
    <>
    <ToastContainer/>
     <Router>
       <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/iniciar-sesion" element={<Login/>}/>
        <Route path="/clientes" element={<Clients/>}/>
        <Route path="/test-components" element={<App/>}/>
       </Routes>
     </Router>
    </>
  )
}
