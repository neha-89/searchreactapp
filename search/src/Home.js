import React from 'react';
import JSON from './db.json';
import Header from "./Header";
import Footer from "./Footer";
import Product from './productDisplay';
import { Component } from 'react';

class Home extends Component {
   constructor(){
       super()
       
       this.state = {
           productData : JSON,
          
       }
   }
   
   render(){
       console.log(this.state.productData)
    return (
        <>
        <Header  />
        <Product prodData = {this.state.productData} />
        <Footer year ="2022 "month = "April"/>
        </>
    )// as one function can return one value at a time so we need to wrap it under single html element.
  }
}

export default Home ;