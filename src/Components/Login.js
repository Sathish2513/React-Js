import React, { Component} from 'react';
import{Link,withRouter } from "react-router-dom";
import { Image } from 'react-bootstrap';
import {connect} from 'react-redux';


class Login extends Component {
  
constructor(){
super();
this.state = { 
    username:'',
    password:'',
    usernameError :'',
    passwordError :''
}
this.handleChange = this.handleChange.bind(this);
}



handleChange = event=>{
this.setState({
  username:event.target.value,
  
});
  
}

passChange = event=>{

    this.setState({
    password:event.target.value

  });
}


validate = (props)=>{

    if(!this.state.username.length  > 0){
    this.setState ({ usernameError : "Invalid username"})
     return false;
    }

    if(!this.state.password.length > 0 ){
      this.setState ({passwordError : "Invalid!password should contains minimum characters"});
    return false;
    }
    this.props.history.push("/index");

  
    return true;
 
  }
handleSubmit=(event)=>{

  
  let isValid = this.validate();
  if(isValid){

    console.log(this.state);
    
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
<h2 id = "main">Login form</h2>
<form className="login-form" onSubmit = {this.handleSubmit}  name = {this.state.username}>
<input type="text" placeholder="username" value = {this.state.username} onChange ={this.handleChange}/>
    <div><b  style={errorStyle}>{this.state.usernameError}</b></div>
  
<input type="password"  placeholder="password"  onChange ={this.passChange}/>
<div ><b style={errorStyle}>{this.state.passwordError}</b></div>
<button  >login</button>

< Link  to = '/signup' className="message">Not registered? </ Link> 
     
     


</form>

</div>

</div>  

</div>


        );
    }
}
const mapStateToProps = state => {
  return { articles: this.state.username };
};

const List = connect(mapStateToProps);

export default withRouter(Login,List);



