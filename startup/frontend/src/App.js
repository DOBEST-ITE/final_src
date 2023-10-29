import React, {useState, useEffect, Component} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import "./search.css";
import Header from "./components/Header";
import Product from "./pages/Product";
import Review from "./pages/Review";
import Main from "./components/Main";
import axios from "axios"

import './App.css';
import "./styles.css";

function App() {
  const [text, setText] = useState("없음");
  

  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
    

    <Routes>
          <Route path="" element={<Main />} />
          <Route path="/product" element={<Product />} />
          <Route path="/review" element={<Review />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
