import React, {useState} from 'react';
import './App.css';
import Input from './Components/input';
import CheckboxFormParent from './Components/checkBoxFormParent';

function App() {
  const [kw, setKw] = useState([]);
  const [brand, setBrand] = useState('');
  const [location, setLocation] = useState('');

  const styleContainer = {
    display: "flex",
    textAlign:"center",
    justifyContent:"center",
  }

  const styleCBFP = 
  {
    justifyContent:"center",
    textAlign:"center",
  }


  return (
    <div className="App">
      <header className="App-header">
        <div style={styleContainer}>
          <Input headerText={'Brand Name'} inputVar={brand} setInputVar={setBrand}/>
          <Input headerText={'Brand Location'} inputVar={location} setInputVar={setLocation} />
        </div>
        <CheckboxFormParent style={styleCBFP} kwList={kw} setKwList={setKw} />
      </header>
    </div>
  );
}

export default App;
