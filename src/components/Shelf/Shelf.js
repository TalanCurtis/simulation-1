import React, {Component }from 'react';
import './Shelf.css'

export default class Shelf extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="shelf">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}