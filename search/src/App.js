import React,{Component} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {
  render() {
    return(
    <div>
     <Header lib="React" />
     <Home />
     <Footer year = "2022" month = "April"/>
    </div>
  );
}

}
