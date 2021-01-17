import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__icon"
                    src={logo}
                    alt="Logo for the AIRBNB" />
            </Link>
           

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>   
            <div className="header__right">
                <p>Become a Host</p>  
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar/>
            </div>  

        </div>
    )
}

export default Header;
