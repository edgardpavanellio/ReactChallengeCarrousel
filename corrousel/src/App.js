import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Carrousel from './Carrousel';
import ContentCounterWithAlert from './ContentCounterWithAlert';

function App()
{

  return (
    <div className="App">
      <div className="App-header">

      <Carrousel>
        <Content1 />
        <Content2 />
        <Content3 />
        <h1>teste</h1>
        <ContentCounterWithAlert />
      </Carrousel>  
       
      </div>
    </div>
  )

}
export default App;
