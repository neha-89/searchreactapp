import React, { useState } from 'react';
import Child from './Child';

export default function Parent(){
    const[name,setName] = useState('');
    const myName = ()=>{
        setName('ravi');
    }
    const childToParent=()=>{
        alert("this is a data from child to cpmponent");
    }
    return(
        <Child childToParent = {childToParent} name = {myName}/>
    )
}