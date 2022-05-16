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
           filteredData : JSON
          
       }
   }

   filterProduct = (keyword) => {
    let output = this.state.productData.filter((item) => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
    })
    this.setState({filteredData:output})
}
   render(){
       //console.log(this.state.productData)
    return (
        <>
        <Header usertext = {(data)=>{this.filterProduct(data)}}  />{/*receving the data*/}
        <Product prodata = {this.state.filteredData} />
        {/* <Product prodData = {this.state.productData} /> */}
        <Footer year ="2022 "month = "April"/>
        </>
    )// as one function can return one value at a time so we need to wrap it under single html element.
  }
}

export default Home ;