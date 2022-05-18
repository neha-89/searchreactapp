import React from 'react';

export default function Child({childToParent,name}){
    return(
        <>
        <button onClick={()=>childToParent()} >Click Child Button</button>
        <h1>hi {name}</h1>
        </>
    )
}