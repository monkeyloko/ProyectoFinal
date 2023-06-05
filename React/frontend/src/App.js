import logo from './logo.svg';
import './App.css';
import Tabla from './Tabla';
import Modal from './Modal';
function App() {
  const handleClick=()=> {
    let modal = document.getElementById('modal');
    modal.style.display = 'block';
}
  return (
    
   <div>
       <Tabla/>
       
       <Modal />
       <button className='btn btn-primary' onClick={() => handleClick()}>Agregar Auto</button>
   </div>
 
  );
}

export default App;
