import testMap from './files/Global_vector_field.jpg';
import './App.css';
import React from 'react';

import { Component } from 'react';

class TitleBar extends React.Component {
  render() {
    return (<div>
      <a className='large-text'>Oceans</a>
    </div>)
  }
}

class AboutLeft extends React.Component {
  render() {
    return(<div>
            <a>
              this is the about / text section
            </a>
          </div>
      )
  }
}

class ToolsAndData extends React.Component {
  render() {
    return(<div className='ToolsAndData-overall'>
      <a>
        this is the tools and data section
      </a>
      <img src = {testMap} className='mapImage' alt="Logo"/>
        <a>
          image caption
        </a>
    </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleBar/>
        <table border='0px'>
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
