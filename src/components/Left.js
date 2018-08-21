import React, {Component} from 'react';
import Clock from 'react-live-clock';

export default class Left  extends  Component{
    constructor(){
        super();

    }

    render() {
        return(
            <div className='row'>
                <Clock className = 'clock' format={'HH:mm:ss'} ticking={true}  />
            </div>
        );

    }
}