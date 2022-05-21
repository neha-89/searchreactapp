import React from "react";
import {Link} from "react-router-dom";



export default function Post(props){
    console.log(props);
    return(
        <>
        <h1>This is post page</h1>
        <h2>JavaScript</h2>
                <Link to={`/post/Javascript?page=1`} className="btn btn-success">Details</Link>
                <h2>React</h2>
                <Link to={`/post/React?page=2`} className="btn btn-danger">Details</Link>
                <h2>Node</h2>
                <Link to={`/post/Node?page=3`} className="btn btn-info">Details</Link>
        </>
    )
}