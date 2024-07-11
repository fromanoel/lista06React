import React from 'react';
import BoxInfo from './components/boxInfo';
import Apresentacao from "./components/Apresentacao";
import './css/styles.css';

function App() {

  return (
    <div className='box'>
     <Apresentacao />
     <BoxInfo/>
    </div>
  );
}

export default App;
