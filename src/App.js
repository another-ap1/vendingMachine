import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';

//My three components for the vending machine
import Reeses from "./Reeses";
import Chips from "./Chips";
import RedBull from "./RedBull";

//HomePage
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<VendingMachine/>}></Route>
                    <Route path="/reeses" element={<Reeses/>}></Route>
                    <Route path="/chips" element={<Chips/>}></Route>
                    <Route path="/redbull" element={<RedBull/>}></Route>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
