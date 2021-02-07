import React from 'react';
import './Navlinks.css';
import {NavLink} from 'react-router-dom';

function Navlinks(props){
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">Add Place</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    );

}

export default Navlinks; 