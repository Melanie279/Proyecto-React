import logo from './logo.svg';
import './App.css';
import agencias from "./data/agencias.json"
import usuarios from './data/usuarios.json'
import perfiles from './data/perfiles.json'

function App() {
  console.log("User",usuarios)
  console.log("perfiles",perfiles)
  console.log("agencias",agencias)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
