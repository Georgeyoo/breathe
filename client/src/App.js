import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Select from './components/Select'

class App extends Component {
  render() {
    return (
      <div>
         <Header />
         <Select />
      </div>
    );
  }
}

export default App;
