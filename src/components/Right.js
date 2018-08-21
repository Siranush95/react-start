import React, { Component } from 'react';

export default class Right extends Component{
    constructor(){
        super();
        this.state = {count:0};
    }

    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    decrement(){
        this.setState(() => ({
            count: this.state.count - 1
        }));
    }

    render(){
        return (
            <div className='row'>

                <button className='btn' onClick={this.increment.bind(this)}>increment</button>
                <button className='btn'>{this.state.count}</button>
                <button className='btn' onClick={this.decrement.bind(this)}>decriment</button>
            </div>
        );
    }
}