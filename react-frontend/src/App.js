import './App.css';
import Counter from './Counter';
import React from 'react';


class App extends React.Component {
  render() {
    return (
      <div>
        <Counter color="green" />
        <Counter  />
        <Counter color="blue" />
      </div>
    )
  }

} 

export default App;