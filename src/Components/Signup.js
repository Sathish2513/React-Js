import React, { Component } from 'react';
import{withRouter } from "react-router-dom";
import { Image } from 'react-bootstrap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username :'',
      email :'',
      password: '',
      usernameError:'',
      emailError:'',
      passwordError:''
       
    }
    console.log(this.props.name);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = event=>{
    this.setState({username:event.target.value,});
  }


  passChange = event=>{
    this.setState({password:event.target.value});
  }

  emailChange = event=>{
    this.setState({email:event.target.value});
  }


validate=(props)=>{

  if(!this.state.username.length >0){
    this.setState({
     usernameError :"Invalid username"
    });
    return false;
    }

    if(!this.state.password.length >0){
      this.setState({
        passwordError : "Invalid!password should contains minimum characters"
      });
      return false;
    }

    if(!this.state.email.includes('@')){
      this.setState({
        emailError: "Invalid email!"
      });
      return false;
    }
    this.props.history.push("/main");
    return true;
}
handleSubmit = (event)=>{
  let isValid = this.validate();
  
  if(isValid){
    
  }
  event.preventDefault();
}
    
  render() {
    const errorStyle = {
      color: "red",
      fontFamily: "Arial",
      fontSize: "10px",
      
    };
    const img = {
      width:"200px",
      marignBottom:"10px"
    }
        return (
            <div>
       
            <div className="login-page">
            <div className="form">
           

      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMIX663TTwHspsLDn52GUNc4utGMS45RfRjXBYvef6Zir5-lPu" rounded style= {img}/>
   
    
             <h2 id = "main">Signup form</h2>
              <form className="login-form" onSubmit = {this.handleSubmit} >
                <input type="text" placeholder="username" onChange ={this.handleChange}/>
        <b  style={errorStyle}>{this.state.usernameError}</b>
                <input type="text" placeholder="Email"  onChange ={this.emailChange}/>
                <b  style={errorStyle}>{this.state.emailError}</b>
                
                <input type="password" placeholder="password"   onChange ={this.passChange}/>
                <b  style={errorStyle}>{this.state.passwordError}</b>
                <button >Signup</button>
          
                
               
            
          
               
          
              </form>
          
            </div>
            
          </div>  
          
              </div>
          
        );
    }
}

export default withRouter(Signup);