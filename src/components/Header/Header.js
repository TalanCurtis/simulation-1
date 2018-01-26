import React, {Component }from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import Logo from '../../images/logo.png'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            pageTitle:"Shelfie"
        }
    }

    render(){
        return(
            <div className='header'>
                <Link to='/' ><img className='logo' src={Logo} alt='' height='50'></img></Link>
                <h1>{this.state.pageTitle}</h1>
            </div>
        )
    }
}