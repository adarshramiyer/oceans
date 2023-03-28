import testMap from './files/Global_vector_field.jpg';
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src = {testMap} className='mapImage' alt="Logo"/>
        <a>
          image caption
        </a>
      </header>
    </div>
  );
}

export default App;
