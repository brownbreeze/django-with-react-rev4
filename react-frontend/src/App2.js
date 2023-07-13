import React from 'react';

class Wrapper extends React.Component {
    render(){
        return (
            <section style={{padding: '4em', background:'papayship'}}>
                Warpper 
                <hr/>
                {this.props.children}
            </section>
        )
    }
}
const Title = (props) => {
    const fonSize = props.isBig? '3em':'1.5em'
    return (
        <div style={{fonSize, textAlign: 'center', color:'palevioleted'}}>
            {props.children}
        </div>
    )
}
function App2(){
    const component = <Title>hello world!</Title> 
    return (
        <Wrapper children={component}/>
    )
}
export default App2;