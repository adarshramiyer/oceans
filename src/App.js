import testMap from './files/Global_vector_field.jpg';
import './App.css';
import React from 'react';

import { Component } from 'react';

class TitleBar extends React.Component {
  render() {
    return (<div>
      <a className='large-text'>OceanTrack</a>
    </div>)
  }
}

class AboutLeft extends React.Component {
  render() {
    return(<div className='limit-width'>
            <a className='normal-text'>
              OceanTrack uses data from NASA's OSCAR dataset to forecast the path of trash through the ocean, with the goals of (1) promoting accountability and publicity
              and (2) identifying areas where trash flows close to coasts for easier cleanup operations.
              The forecasting algorithm utilizes a grid-based vector field for surface current drift and wind, 
              interpolating based on euclidean distance and incorporating random perturbations to stochastically predict a trajectory. Try OceanTrack for yourself
              here and learn more at <a href='https://github.com/adarshramiyer/oceans'>this link</a>
            </a>
          </div>
      )
  }
}

class ToolsAndData extends React.Component {
  render() {
    return(<div className='ToolsAndData-overall'>
        <img src = {testMap} className='mapImage' alt="Logo"/>      
        <a>
        Interactive Forecasting:
        <input type='number' placeholder='latitude' className='input-format'/>
        <input type='number' placeholder='longitude' className='input-format'/>
        <button type='button' className='button'>Forecast</button>
      </a>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className='transparent-text'>
          placeholder
        </a>
        <TitleBar className='large-text'/>
        <table border='0px'>
          <tr>
            <td className='transparent-text'>
              helo
            </td>
          </tr>
          <tr>
            <td>
              <AboutLeft/>
            </td>
            <td className='mid-table-padding'>
            </td>
            <td>
              <ToolsAndData/>
            </td>
          </tr>
        </table>
      </header>
    </div>
  );
}

export default App;
