import React from "react";

import Cupcake from "./Cupcake";
import Chips from "./Chips";
import Candy from "./Candy";

import { BrowserRouter, Link, Route } from "react-router-dom";

function VendingMachine() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <BrowserRouter>
            <Link exact to='/Cupcake'>Cupcake</Link>
            <Link exact to='/Chips'>Chips</Link>
            <Link exact to='/Candy'>Candy</Link>
            
                <Route exact path="/Cupcake">
                <Cupcake/>
                </Route>
                <Route exact path="/Chips">
                <Chips/>
                </Route> 
                <Route exact path="/Candy">
                <Candy/>
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;