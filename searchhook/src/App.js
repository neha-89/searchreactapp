import React from 'react';
//import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import {BrowserRouter as Router,Routes, Route, Link }from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

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
            {/* <Route path="/" component={<Home />}></Route>
            <Route path="/about" component={<About />}></Route>
            <Route path="/contact"component={<Contact />}></Route>
            <Route path="/post"component={<Post/>}></Route> */}
                
          
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/about'element={<About />}></Route>
                <Route exact path='/contact'element={<Contact />}></Route>
                <Route exact path='/post'element={<Post />}></Route>

            </Routes>
        </Router>
    )
}
