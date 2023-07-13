import React from "react";

import { List } from 'antd';
// class TodoItem extends React.Component{
//     render(){
//         const {todo } = this.props;
//         return (
//             <li>{todo}</li>
//         )
//     }
// }

const TodoItem = ({todo}) => <li>{todo}</li>;

class TodoList extends React.Component{
    state = {
        todoList : ['파이썬 익히기', '장고익히기'],
        current : '',

    }
    onChange = (e) =>{
        const {value} = e.target;
        this.setState({
            current:value,
        });
        console.log(value);
    }
    onKeyDown = (e) =>{
        if (e.keyCode === 13) {
            const {todoList, current} = this.state;
            if (current.trim().length > 0){
                this.setState({
                    current : '',
                    todoLIst : [...todoList, current],    
                })    
            }
            // enter key 13
        }
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.todoList.map((todo, index)=>
                        <TodoItem key={index} todo={todo}/>
                    )}
                </ul>
                <input type="text" value={this.state.current} 
                    placeholder="할 일을 입력해 주세요."
                    onChange={this.onChange} onKeyDown={this.onKeyDown}/>
                <button>submit</button>
                <hr/>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default TodoList;