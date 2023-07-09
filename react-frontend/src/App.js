import { Button } from 'antd';
import './App.css';
import React from 'react';
// import 'antd/dist/react.css' # version 4 후부터 필요 없음

class Counter1 extends React.Component{ 
  state = {
    value:this.props.initialValue,
  }
  render() {
    const {value} = this.state; // 현재의 상태값을 참조
    return <div>Counter1: {value}</div>; // jsx문법
  }
}
function App() {
  return (
    <div>
      <Counter1 initialValue={10}></Counter1>
      <Counter1 initialValue={10}></Counter1>
      <Counter1 initialValue={10}></Counter1>
    </div>
  );
}

export default App;
// 부모 컴포넌트로부터 내려받는 속성값 : props
// 컴포넌트 내부에서 생성/관리되는 상탯값 : state
// class component는 render() 함수가 호출
// function component는 그 함수가 매번 호출 -> 유지해야할 값들은 hook을 통해 관리함(hook 얼마안됨)
