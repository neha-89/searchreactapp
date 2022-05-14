import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <Header/>
        <h1>Hii From React</h1>
        <Footer year ="2022 "month = "April"/>
        </>
    )// as one function can return one value at a time so we need to wrap it under single html element.
        
}

export default Home