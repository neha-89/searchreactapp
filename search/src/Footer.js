import React from 'react';

const Footer = (props)=>{
    return(
        <center>
            <hr/>
        <div>
            <h1> &copy; Developer {props.year} {props.month}</h1>
        </div>
        
        </center>
    )
}

export default Footer;