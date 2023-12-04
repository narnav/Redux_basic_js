import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import MyCounter from './MyCounter';
import Sec from './Sec';
import UserColor from './UserColor';

function App() {
  return (
    <div className="App">
            <MyCounter></MyCounter>
            <Sec></Sec>
            <UserColor></UserColor>
    </div>
  );
}

export default App;
