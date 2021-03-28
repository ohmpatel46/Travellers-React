import React,{useState} from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import BackDrop from '../UIelements/Backdrop';
import Navlinks from './Navlinks';
import {Link} from 'react-router-dom';

function MainNavigation(props)
{
    const [drawerIsOpen,setDrawerIsOpen]=useState(false);
    function openDrawerHandler(){
        setDrawerIsOpen(true);
    };
    function closeDrawerHandler(){
        setDrawerIsOpen(false);
    };
    return(
        <React.Fragment>
            {drawerIsOpen &&(
                <BackDrop onClick={closeDrawerHandler}/>
            )}
            
                <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <Navlinks/>
                </nav>
                </SideDrawer>
            
            
            
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
        </React.Fragment>
    );
}

export default MainNavigation;