import React from "react";
import Home from "./components/templates/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/templates/details";
import { About } from "./components/templates/about";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<Details />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
