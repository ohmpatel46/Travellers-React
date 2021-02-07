import React from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import Navlinks from './Navlinks';
import {Link} from 'react-router-dom';

function MainNavigation(props)
{
    return(
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span/>
                <span/>
                <span/>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <Navlinks/>
            </nav>
        </MainHeader>
    );
}

export default MainNavigation;