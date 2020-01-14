import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, FormControl,NavDropdown} from 'react-bootstrap';
import{Link } from "react-router-dom";
import '../App.css';

import Footer from './Footer.js';
import Signup from './Signup';


class Welcome extends Component {



    render() {
      const style = {
        fontFamily: 'Dancing Script',
        fontSize: "2em",
      }
       const font = {
        fontSize: "2em",

       }
       const signup = {
         width:"360px",
        height:"180px",
         marginLeft:"1400px",
         
       }     
       const tag = {
        fontFamily: 'Dancing Script',
        fontSize: "3em",
        color:"white"
      
      }
     
        return (
<div className = "welcome">
<Navbar id = "nav-content" expand="sm">
  <Navbar.Brand href="#home"  style = {style} >Welcome</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" ><b><i class="fa fa-home" aria-hidden="true"></i>Home</b></Nav.Link>
      <Nav.Link href="#link"><b><i class="fa fa-graduation-cap" aria-hidden="true"></i>Careers</b></Nav.Link>
       <NavDropdown title="Categories" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">SignIn</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Complaints</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Contact us </NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-4" />
      <Button variant="outline-success" className = "variant">Search</Button>
      <i className="fa fa-user" aria-hidden="true" style = {font}>
  <b> <Link  to = '/login'  class="variant">Login </ Link> </b> 
 
  </i>
    
     
    </Form>
  
  </Navbar.Collapse>
</Navbar>
<div>

  
</div>
<div style ={signup}>
<Signup />
</div>
<h1 style = {tag}> Better experience..Better you work..</h1>


<Footer/>

            </div>
        );
    }
}

export default Welcome;