import React from 'react';

export default function PostDetails(props){
    console.log(props);
    return(
        <>
        <h1>{props.match.params.topic}Post Details</h1>
        <p>This is {props.match.params.topic} post details page</p>
        <h3>You are on page number {props.location.search.split('=')[1]}</h3>
        </>
    )
}
