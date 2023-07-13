import React from "react";



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
    render(){
        return (
            <div>
                <ul>
                    {this.state.todoList.map((todo, index)=>
                        <TodoItem key={index} todo={todo}/>
                    )}
                </ul>
                <input onChange={this.onChange}/>
                <button>submit</button>
                <hr/>
                {JSON.stringify(this.state)}
            </div>
        )
    }
}

export default TodoList;