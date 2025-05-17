import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import Home from "./components/screens/Home";
import Product from "./components/screens/Product";
import Item from "./components/screens/Item";


function App() {
    return (
        <>
            <GlobalStyles />
            <Router basename="/exclusive-react">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/item" element={<Item />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;