import React, {Component }from 'react';

export default class Bin extends Component{
    constructor(props){
        super(props)
        this.state = {
            bin:[]
        }
    }

    render(){
        return(
            <div className="Bin">
                Bin Comp
            </div>
        )
    }
}