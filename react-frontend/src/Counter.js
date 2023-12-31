import React from 'react';
import PropTypes from 'prop-types';
class Counter extends React.Component {
    static defaultProps = {
        color : 'red',
    }
    state = {
        color : this.props.color,
        value : 0,
    }

    onClick = () => {
        // this.setState({ value: this.state.value + 1});
        this.setState(({value : prevValue}) => ({
            value : prevValue + 1
        }))
    }

    onContextMenu = (e) => {
        e.preventDefault();
        this.setState(({value : prevValue}) => ({
            value : (prevValue > 1 ? prevValue - 1 : 0)
        }))
    } 

    render( ){
        const { color, value } = this.state;
        return (
            <div onClick={this.onClick} 
                onContextMenu={this.onContextMenu}
                style={{...style, backgroundColor: color }}>
                {value}
            </div>
        )
    }
}
const style = {
    width : '100px',
    height : '100px',
    display : 'inline-block',
    // backgroundColor : 'red',
    borderRadius : '50px',
    textAlign : 'center',
    lineHeight:'100px',
    userSelet : 'none',
    fontSize:'3rem',
    margin : '3rem',
};

export default Counter;