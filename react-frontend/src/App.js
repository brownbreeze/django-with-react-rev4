import { Button } from 'antd';
import './App.css';
import React from 'react';

class PostDetail extends React.Component {
  state = {
    postDetail : null,
  }

  componentDidMount(){
    const {postId} = this.props;
    this.requestPost(postId);
  }
  componentDidUpdate(prevProps){
    const {postId} = this.props;
    if (postId!== prevProps.postId){
      this.requestPost(postId);
    }

  }
  requestPost(postId){
    console.log(`-> #${postId}`);
    this.setState({
      postDetail : null
    });
    setTimeout(()=>{
      this.setState({
        postDetail: `로딩된 ${postId}`
      })
    }, 3000);
    //axios (http client) => this.setStatus
  }

  render() {
    const {postId} = this.props;
    const {postDetail} = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {!postDetail && "로딩 중 ..."}
        {postDetail}
      </div>

    )
  }
}

class App extends React.Component {


  state = {
    postId:10
  }
  render() {
    return (
      <div>
        <PostDetail postId={this.state.postId}/>
        <button onClick={()=>this.setState({postId:20})}>
          postId변경
        </button>
      </div>
    );  
  }
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
// -> setState() 비동기로 동작, 

//속성값 : props = 컴포넌트 생성 시에 넘겨지는 값의 목록
// -> 읽기 전용 취급 
// -> 