import React from 'react';

class Header extends React.Component {
    constructor(){
        super()
        this.state = {
            heading:"React App",
            keyword:"User Text Here"
        }
    }
    render(){
        return(
            <>
            <header>
            <div className="logo">{this.state.heading}</div>
            <center>
                <input />
                <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
            </center>
        </header>
        <hr/>
        </>
        )
    }
    
}

export default Header;