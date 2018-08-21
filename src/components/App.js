import React, { Component } from 'react';
import logo from '../logo.png';
import Right from './Right';
import Left from './Left';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {percentage: 0};

    }

    componentDidMount() {
        
        this.interval = setInterval(() =>
            this.setState({percentage: ++this.state.percentage}),
        100);
       

    }


    render() {
        return (
            <div className='container'>                
                <img className='logo' src={logo} />
                {this.state.percentage<99 && <CircularProgressbar
                    percentage={this.state.percentage}
                    text={`${this.state.percentage}%`}
                />}
                <Right/>
                <Left/>

            </div>
        );
    }
}
