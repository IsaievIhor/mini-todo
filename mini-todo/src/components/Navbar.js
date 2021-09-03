import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={'navbar navbar-dark navbar-expand-lg bg-primary'}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Note App
                </a>
            </div>
            <ul className="navbar-nav">
                <li>
                    <NavLink
                        className="nav-link"
                        to={'/'}
                        exact
                    >
                        Главная
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className="nav-link"
                        to={'/about'}
                    >
                        Информация
                    </NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;