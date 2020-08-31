import React, {useState} from 'react';
import './App.css';
import Input from './Components/input';
import CheckBoxForm from './Components/checkBoxForm';

function App() {
  const [kw, setKw] = useState([]);
  const [brand, setBrand] = useState('');
  const [location, setLocation] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <Input headerText={'Brand Name'} inputVar={brand} setInputVar={setBrand}/>
        <Input headerText={'Brand Location'} inputVar={location} setInputVar={setLocation} />
        <CheckBoxForm kw={kw} setKw={setKw}/>
      </header>
    </div>
  );
}

export default App;
