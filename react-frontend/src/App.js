import './App.css';
import Counter from './Counter';
import React from 'react';
import Message from "./Message";
import Profiles from "./Profiles";


class App extends React.Component {
  render() {
    return (
      <div>
        <Profiles/>
        <Message/>
        <Counter color="green" />
        <Counter  />
        <Counter color="blue" />
      </div>
    )
  }

} 

export default App;