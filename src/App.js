import logo from './logo.svg';
import './App.css';


import randomstring from 'randomstring';
import Person from './person';
import {sum, pi, imeAplikacije} from './utility';

function App() {
  var rndStr = randomstring.generate({
    length: 8
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {imeAplikacije}, {rndStr}
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
