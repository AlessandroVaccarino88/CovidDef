import './App.css';
import InteractiveMap from "./WorldMap";
import React, {useState} from "react";
import Dati from "./DatiGenerali"
import Grafico from "./Grafico";

function App() {
    const [country, setCountry] = useState("IT")
  return (
    <div className="App">
        <div>
          <InteractiveMap onClick={setCountry}/>
        </div>
        <div className="Dati">
            <Dati country={country}/>
        </div>
        <div className="Grafici">
          <Grafico country="IT"/>
          <Grafico country={country}/>
        </div>
    </div>
  );
}

export default App;
