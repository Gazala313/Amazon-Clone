import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";
import CheckoutAds from "./Components/CheckoutAds";
import Footer from "./Components/Footer";
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
            <Footer/>
          </React.Fragment>
        }/>
        
        <Route exact path="/checkout" element={
          <React.Fragment>
            <Header/>
            <CheckoutAds/>
            <ShoppingBasket/>
            <Footer/>
          </React.Fragment>
        }/>
      </Routes>
      </Router>
      
      
    
  );
}

export default App;
