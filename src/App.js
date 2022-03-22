import logo from './logo.svg';
import './App.css';
import agencias from "./data/agencias.json"
import usuarios from './data/usuarios.json'
import perfiles from './data/perfiles.json'
import Prueba from './pages/fernando';

function App() {
  console.log("User",usuarios)
  console.log("perfiles",perfiles)
  console.log("agencias",agencias)
  return (
    <Prueba/>
  );
}

export default App;
