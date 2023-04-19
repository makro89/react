import logo from './logo.svg';
import './App.css';


import randomstring from 'randomstring';
import Person from '../../src/person';
import { sum, pi, imeAplikacije } from '../../src/utility';

import { Komponenta1 } from './Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3';

import { GlavnaKomponenta, NovaKomponenta } from './GlavnaKomponenta';

function App() {
  var rndStr = randomstring.generate() {
    var zbroj = sum(10, 12) * pi + (broj1 * broj2);
    var rndStr = randomstring.generate({
    length: 8
  });
  console.log("Random string = " + rndStr);
  var od = oduzmi(broj2, broj1);

  var prva = "prvi-text";
  var druga = "drugi-text";

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
    <Komponenta1 />
    <Komponenta2 podatak1={prva} />
    <Komponenta3 podatak1={prva} podatak2={druga} />
    <GlavnaKomponenta />
  </div>
);
}

export default App;
