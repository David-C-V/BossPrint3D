import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Ghm from "./components/Ghm";
import Home from "./components/Home";
import E4 from "./components/E4";
import logo from "./img/logoBP3D.png"
import Ed4 from "./components/Ed4";
import Ed5 from "./components/Ed5";

function App() {
  return (
    <div className="App">
      <section class="headerContainer">
        <Router>
          <header>
            <nav id="menu">
              <label for="" class="logo">               
                  <img src={logo} alt="logoBP3D"/>               
              </label>
              <div className="link">
              <Link to="/">Home</Link>
              <Link style={{ marginLeft: "20px"}} to="/ghm">Google Home Mini</Link>
              <Link style={{ marginLeft: "20px"}} to="/e4">Soportes de Echo 4</Link>
              <Link style={{ marginLeft: "20px"}} to="/ed4">Soportes de Echo Dot 4</Link>
              <Link style={{ marginLeft: "20px"}} to="/ed5">Soportes de Echo Dot 5</Link>
              </div>
            </nav>
          </header>
          <Routes>
            <Route path="/" exact Component={Home}></Route>
            <Route path="/ghm" exact Component={Ghm}></Route>
            <Route path="/e4" exact Component={E4}></Route>
            <Route path="/ed4" exact Component={Ed4}></Route>
            <Route path="/ed5" exact Component={Ed5}></Route>
            
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
