import React from 'react';
import "./Header.css";
class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            heading:"React App",
            keyword:"User Text Here"
        }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        // from here we are passing data
       // this.props.userText(event.target.value)

    }

    render(){
        return(
            <>
            <header>
            <div className="logo">{this.state.heading}</div>
            <center>
                <input onChange = {this.handleChange}/>
                <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
            </center>
        </header>
        <hr/>
        </>
        )
    }
    
}

export default Header;