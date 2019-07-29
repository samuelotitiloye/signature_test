import './App.css';
import React, { Component } from 'react';
import Signature from '../src/component/signature/signature';
import PdfMaker from './component/Pdf/PdfMaker';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Signature />
        <PdfMaker />
      </div>
    );
  }
}




export default App;


