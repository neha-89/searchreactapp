import React from 'react';
//import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import {BrowserRouter as Router,Routes, Route, Link }from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import PostDetails from './components/postDetails';

export default function App(){
    return(
        <Router>
            <div className="app">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>
            </div>
                
          
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about'element={<About />}></Route>
                <Route exact path='/contact'element={<Contact />}></Route>
                <Route exact path='/post'element={<Post />}></Route>
                <Route path='/post/:topic'element={<PostDetails />}></Route>

            </Routes>
        </Router>
    )
}
