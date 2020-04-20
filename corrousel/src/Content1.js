import React from 'react';
import logo from './logo.svg';
import './App.css';

class Content1 extends React.Component
{

    render()
    {
        return(
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        )
    }
}

export default Content1;