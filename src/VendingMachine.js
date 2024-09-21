import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

const VendingMachine = () => {
    return(
        <div>
            <h1>Welcome to the very limited vending machine</h1>
            <p>Please choose a snack below, I know theres not much but its what we got</p>
            <div className="Nav">
                <Link to="/reeses" className="btn">Reeses</Link>
                <Link to="/chips" className="btn">Chips</Link>
                <Link to="/redbull"className="btn">Redbull</Link>
            </div>
        </div>
    )
}

export default VendingMachine;