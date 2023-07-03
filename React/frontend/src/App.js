import './App.css';
import Tabla from './Tabla';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetallesAuto from './DetallesAuto';
import Modal from './Modal';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Tabla />} />
          <Route path="/autos/:idAuto" element={<DetallesAuto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;