import { Button } from 'antd';
import './App.css';
import React from 'react';
// import 'antd/dist/react.css' # version 4 후부터 필요 없음

class Counter1 extends React.Component{ 
  state = {
    value:this.props.initialValue,
  }
  onClick = () =>{
    this.setState((prevState) => {
      const {value} = prevState;
      return { value: value+1};
    });
    this.setState((prevState) => {
      const {value} = prevState;
      return { value: value+1};
    });
    this.setState((prevState) => {
      const {value} = prevState;
      return { value: value+1};
    });
  }
  render() {
    const {value} = this.state; // 현재의 상태값을 참조
    return (
      <div>
        Counter 1: {value}
        <Button onClick={this.onClick}>+1</Button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Counter1 unter1 initialValue={10}></Counter1>
    </div>
  );
} 

export default App;
// 부모 컴포넌트로부터 내려받는 속성값 : props
// 컴포넌트 내부에서 생성/관리되는 상탯값 : state
// class component는 render() 함수가 호출
// function component는 그 함수가 매번 호출 -> 유지해야할 값들은 hook을 통해 관리함(hook 얼마안됨)

// react element : 화면을 담당. React앱의 가장 작은 단위
// 일반 객체 Plain object
// jsx
// const reactElement1 = <h1>hello react</h1>
// js 
// const reactElement2 = React.createElement('h1', null, 'hello react');

//상탯값 : state = UI(엘리먼트)로의 반영을 위해 유지해야할 값들의 묶음
// -> 상챗값은 변경하면 안됨
// -> this.state.~~ = ?? (X) , this.setState();
// -> setState() 비동기로 동작
