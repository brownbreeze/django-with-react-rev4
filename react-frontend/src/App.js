import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
// import 'antd/dist/react.css'

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={()=>console.log('clicked')}>hello buttn</Button>
    </div>
  );
}

export default App;
