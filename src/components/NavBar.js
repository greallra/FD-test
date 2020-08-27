import React from "react";
import {
    NavLink, Redirect
  } from "react-router-dom";
import { connect } from 'react-redux';

function NavBar() {
        return( 
            <nav>
                <ul>
                    <li>
                    <NavLink to="/" >Menu</NavLink>
                    </li> 
                </ul>
            </nav>
        )
}

export default connect()(NavBar);