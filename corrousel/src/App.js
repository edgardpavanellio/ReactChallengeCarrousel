import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

class App extends React.Component {

  constructor() {
    super();
    this.state= {
      actual: 0
    }
 }

  render(){

    const contents = [<Content1 />, <Content2 />,<Content3 />];

    const gobutt= () => {

      if(this.state.actual == contents.length - 1)
      {
        this.setState({ actual: 0});
      }
      else{
      this.setState({ actual: this.state.actual +1 });
      }
    } 

    const backbutt= () => {

      if(this.state.actual == 0)
      {
        this.setState({ actual: contents.length -1 });
      }
      else{
      this.setState({ actual: this.state.actual -1 });
      }
    } 


  return (
    <div className="App">
      <header className="App-header">

        <div>
              <img src="https://i.ya-webdesign.com/images/video-button-png-18.png" width="70" height="70" onClick={() => gobutt()}/>
        </div>

      
          <div>
            {contents[this.state.actual]}
          </div>
          

         <div float="left">
              <img src="back.png" width="70" height="70" onClick={() => backbutt()} />
         </div>

      </header>
    </div>
  );
}
}
export default App;
