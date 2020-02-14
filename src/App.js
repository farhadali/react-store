import React,{Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import Product from "./pages/ProductPage"
import Contact from "./pages/ContactPage"
import SingleProduct from "./pages/SingleProductPage"
import Default from "./pages/DefaultPage"
import Cart from "./pages/CartPage";
import {Route,Switch} from "react-router-dom";

import Navbar from "./components/Navbar"
import SideBar from "./components/SideBar"
import SideCart from "./components/SideCart"
import Footer from "./components/Footer"

class App extends Component{
  render(){
    return<>
      {/* Navbar,sidebar,cart,footer */}
      <Navbar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/product" exact component={Product} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/product/:id" exact component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Route  component={Default} />
      </Switch>
      <Footer />
    </>
  }
}

export default App;
