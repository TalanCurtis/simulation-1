import React, { Component } from 'react';
import './PageHome.css';
import Shelves from '../Shelves/Shelves';

export default class PageHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="pageHome">
                <Shelves />
            </div>
        )
    }
}