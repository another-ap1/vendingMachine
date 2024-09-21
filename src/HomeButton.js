import React from "react";
import { Link } from "react-router-dom";

const HomeButton = ()=>{
    return(
        <p className="HomeButton"><Link to="/">Back To Vending Machine</Link></p>
    )
}

export default HomeButton;