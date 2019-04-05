import React, {Component} from 'react';
import logo1 from './image/logo1.png';

export const Nav = (props) =>(
    <nav className="nav-bar navbar-light bg-light">
                    <ul className="nav navbar-nav flex-row">
                            <li className="nav-item pl-2">
                                <img src={logo1} alt="logo" height="32" width="32"/>
                            </li>
                            <li className="nav-item pl-2">
                                <a className = "nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item pl-2">
                                <a className = "nav-link" href="#">Account</a>
                            </li>
                            <li className="nav-item pl-2">
                                <a className = "nav-link" href="#">About Us</a>
                            </li>
                    </ul>

        </nav>
);

export default Nav;