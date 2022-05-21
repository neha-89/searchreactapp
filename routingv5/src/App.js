import React from "react";
import { BrowserRouter,Route,Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';


export default function App(){
    return(
       <BrowserRouter>
            <ul>
                <li><Link to ='/' >Home</Link></li>
                <li><Link to = '/about'>About</Link></li>
                <li><Link to ='/contact'>Contact</Link> </li>
                <li><Link to = '/post'>Post</Link></li>
            </ul>
            <Route path="/" component={<Home />}/>
            <Route path="/about" component={<About/>}/>
            <Route path="/contact" component={<Contact/>}/>
            <Route path="/post" component={<Post/>}/>
       </BrowserRouter>

    )
}