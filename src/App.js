import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import CheckoutAds from "./Components/CheckoutAds";
import Header from './Components/Header';
import LoginPage from "./Components/LoginPage";
import ProductList from "./Components/ProductList";
import ShoppingBasket from "./Components/ShoppingBasket";

function App() {
  return (
    
      <Router>
        
        <Routes>
      <Route exact path="/Login" element={
          <React.Fragment>
            <LoginPage/>
          </React.Fragment>
        }/>
        <Route exact path="/" element ={
          <React.Fragment>
            <Header/>
            <Banner/>
            <ProductList/>
          </React.Fragment>
        }/>
        
        <Route exact path="/checkout" element={
          <React.Fragment>
            <Header/>
            <CheckoutAds/>
            <ShoppingBasket/>
          </React.Fragment>
        }/>
      </Routes>
      </Router>
      
      
    
  );
}

export default App;
