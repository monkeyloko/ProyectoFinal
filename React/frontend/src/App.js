import './App.css';
import Tabla from './Tabla';
import Layout from './Layout';
import TablaContratos from './TablaContratos';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import DetallesAuto from './DetallesAuto';
import NoPage from './NoPage';
import Modal from './Modal';
import DetallesContrato from './DetallesContrato';
import Clientes from './Clientes'
import Plantilla from './components/PlantillaContrato';

function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Tabla />} />
          <Route path="/autos/:idAuto" element={<DetallesAuto />} />
          <Route path="/contratos" element={<TablaContratos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contratos/ver/:idContrato" element={<Plantilla />} />
          <Route path="/contratos/:idContrato" element={<DetallesContrato />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}


export default App;