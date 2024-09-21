import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <nav className="Nav">
            <Link to="/reeses" className="btn">
                Reeses
            </Link>
            <Link to="/chips" className="btn">
                Chips
            </Link>
            <Link to="/redbull" className="btn">
                RedBull
            </Link>
        </nav>
    )
}

export default Nav;