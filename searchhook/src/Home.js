import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Json from './db.json';
import Product from './productDisplay';

export default function Home(){
    const year = useState('2022');
    const month = useState('April');
    const [productdata ,setProductData] = useState(Json);
    return(
        <>
        <Header />
        <Product productdata = {productdata}/>
        <Footer year={year} month={month} />
        </>
    )
}
