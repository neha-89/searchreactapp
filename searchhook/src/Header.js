import React from "react";
import './Header.css';
import { useState } from "react";

export default function Header(){
    const heading = useState('React App');
    const [keyword,setKeyword] = useState('User Text Here ');
    const [type,setType] = useState('');

    const handleChange = (event) =>{
      console.log(event.target.value);
      setType(event.target.value);
      setKeyword(event.target.value);
    }
    
    

    return(
        <>
        <header>
                    <div className="logo">{heading}</div>
                    <center>
                        <input onChange = {handleChange} value = {type}/>
                        <div style={{color:'white',fontSize:'20px'}}>{keyword}</div>
                    </center>
                </header>
                <hr/>
        </>
    )
}