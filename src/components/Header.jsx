
import React from "react";
import {  Link } from "react-router-dom";

// Import the components for each route



    const Header = () => {
        return (
          <header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
          </header>
        );
      };


export default Header;
