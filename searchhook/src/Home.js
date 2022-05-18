import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Home(){
    const year = useState('2022');
    const month = useState('April');
    return(
        <>
        <Header />
        <h1>hii this is parent home page</h1>
        <Footer year={year} month={month} />
        </>
    )
}
