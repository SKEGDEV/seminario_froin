import Private_nav  from './components/global/navigations/private_nav.jsx'
import './styles/global/global.css';
import Simple_modal from './components/global/Modal.jsx';

function App() {
  return (
    <div className="App">
      <Simple_modal modal_question="Esta seguro de inhabilitar este usuario?"/>
    </div>
  );
}

export default App;
