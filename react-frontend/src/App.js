import { Button } from 'antd';
import './App.css';
import React from 'react';
// import 'antd/dist/react.css' # version 4 후부터 필요 없음

class Counter1 extends React.Component{ 
  state = {
    value:this.props.initialValue,
  }
  onClick = () =>{
    const {value} = this.state;
    this.setState({value:value+1});
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
class FruitComponent extends React.Component {
  render(){
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {
            this.props.fruits.map((name, idx) =>(
              <li key={idx}>{name}</li>
              // 순회할 경우 key가 꼭 있어야함.
            ))
          }
        </ul>
      </div>
    )
  }
}

function App() {
  const fruits = ['바나나', '사과', '딸기'];
  return (
    <div>
      <Counter1 unter1 initialValue={10}></Counter1>
      <FruitComponent fruits={fruits} />
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