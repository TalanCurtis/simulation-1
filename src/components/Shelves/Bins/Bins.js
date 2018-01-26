import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import './Shelves.css';

export default class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            bins: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
        }
    }
    render() {
        const bins = this.state.bins.map((bin, i) => {
            return (
                <Link key={i} className="bin" to={`/Bins/${bin.id}`}>
                    <div className="bin" ><h1>{bin.id}</h1></div>
                </Link>
            )
        })
        return (
            <div>
                <h1>Bins</h1>
                {bins}
            </div>
        )
    }

} 