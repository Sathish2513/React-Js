import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Welcome from './Components/Welcome';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Index from './Components/Index';
import { Image} from 'react-bootstrap';
import { Provider } from "react-redux";
import store from "./js/Index";


function App() {
  const pagenotfound = {
   marginTop:'300px',
   marginLeft:'300px'
  }
  return (
    <Provider store={store}>

    <BrowserRouter >
    <div id = 'root'>
    <Switch>
<Route path = "/login" exact render = {(props)=>{
    return (<Login  name = {props.username}/>)
    }
} />
<Route path = "/signup" exact render={()=>{
  return (<Signup/>)
}} />
<Route path = "/" exact render = {()=>{
    return (<Welcome />)
    }
} />
<Route path = "/index" exact render = {(props)=>{
    return (<Index />)
    }
} />
<Route exact component = {()=>{
    return (<div style = {pagenotfound}>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLLLo7aV7fbHQJyf075EwyQzd4cV3RlIzbrY6zSA43Mz7tdmh9" thumbnail />
    </div>)
    }
} />

  </Switch>
    </div>
  
    </BrowserRouter>
    
   </Provider>
  );
}

export default App;
