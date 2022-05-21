import React from "react";
import { BrowserRouter,Route,Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import PostDetails from "./components/postDetails";


export default function App(){
    return(
       <BrowserRouter>
            <ul>
                <li><Link to ='/' >Home</Link></li>
                <li><Link to = '/about'>About</Link></li>
                <li><Link to ='/contact'>Contact</Link> </li>
                <li><Link to = '/post'>Post</Link></li>
                
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/post" component={Post}/>
            <Route path="/post/:topic" component={PostDetails}/>
       </BrowserRouter>

    )
}

