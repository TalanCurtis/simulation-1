import React, {Component }from 'react';
import './PageHome.css';
import Shelf from '../Shelf/Shelf';

export default class PageHome extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
            <div className="pageHome">
                <Shelf title='Shelf A' />
                <Shelf title='Shelf B' />
                <Shelf title='Shelf C' />
                <Shelf title='Shelf D' />
            </div>
        )
    }
}