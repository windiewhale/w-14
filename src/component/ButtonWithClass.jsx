import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1: "this is the default state of a class component",
            key2: 0
        }
      //  this.handleClick = this.handleClick.bind(this)
    }
    
// onclick={this.handleClick} should be called this way
    /* handleClick(){
        this.setState({key1: "this is an updated state of the class component"}) 
    } */

    render() {
        return (
            <div>
                <p>{this.state.key1}</p>
                <button onClick={() => this.setState({key1: "this is an updated state of the class component"})}>click me</button>
                <button onClick={() => this.setState({key2: 1})}>{this.state.key2}</button>
            </div>
        );
    }
}

export default ButtonWithClass;