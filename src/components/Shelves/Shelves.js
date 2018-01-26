import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Shelves.css';

export default class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            shelves: [{ id: 1, name: 'Shelf A' }, { id: 2, name: 'Shelf B' }, { id: 3, name: 'Shelf C' }, { id: 4, name: 'Shelf D' }]
        }
    }
    render() {
        const shelves = this.state.shelves.map((shelf, i) => {
            return (
                <Link key={i} className="shelf" to={`/${shelf.name}`}>
                    <div className="shelf" ><h1>{shelf.name}</h1></div>
                </Link>
            )
        })
        return (
            <div>
                <h1>Shelves</h1>
                {shelves}
            </div>
        )
    }

} 