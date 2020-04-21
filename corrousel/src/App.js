import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Carrousel from './Carrousel';

class App extends Component {

  render(){

  return (
    <div className="App">
      <div className="App-header">

      <Carrousel>
        <Content1 />
        <Content2 />
        <Content3 />
      </Carrousel>  
       
      </div>
    </div>
  );
}
}
export default App;
