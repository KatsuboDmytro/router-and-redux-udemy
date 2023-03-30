import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {NavBar} from "./components/NavBar";
import {Home} from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Card from "./components/Card";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/router-and-redux-udemy/' element={<Home/>} />
          <Route path='/router-and-redux-udemy/about' element={<About/>} />
          <Route path='/router-and-redux-udemy/contact' element={<Contact/>} />
          <Route path='/router-and-redux-udemy/:user' element={<Card/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
