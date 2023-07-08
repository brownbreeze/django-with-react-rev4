import { Button } from 'antd';
import './App.css';
// import 'antd/dist/react.css' # version 4 후부터 필요 없음

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={()=>console.log('clicked')}>hello buttn</Button>
    </div>
  );
}

export default App;
// 부모 컴포넌트로부터 내려받는 속성값 : props
// 컴포넌트 내부에서 생성/관리되는 상탯값 : state
// class component는 render() 함수가 호출
// function component는 그 함수가 매번 호출 -> 유지해야할 값들은 hook을 통해 관리함(hook 얼마안됨)
