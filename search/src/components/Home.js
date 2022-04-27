import React,{Component} from 'react';

export default  class Home extends Component(){
    constructor(){
        super()
            this.state= {
              keyword : 'User Text Here'
            }
        }
    handleChange = (event)=> {
       console.log(event.target.value);
    }
    
render(){
    return (
        <>
         <input  onChange={this.handleChange}/>
         <div>
             <p>{this.state.keyword}</p>
         </div>
        </>
        )

    }
}

    