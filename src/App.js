import './App.css';
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import HomeIndex from './homepage/index'
import About from './AboutUs/About'
import Contact from './Contact/ContactUs'
import Booking from './Booking/login'
import ForgetPwd from './Password/forgetPassword'
import SignUp from './Booking/signup'
//import "bootstrap/dist/bootstrap.min.css";

function App() {
  return (
    <Fragment>
<Router>

  <Route path="/forgetpwd" exact component={ForgetPwd}/>
  <Route path="/" exact component={HomeIndex}/>
  <Route path="/About" exact component={About}/>
  <Route path="/contact" exact component={Contact}/>
  <Route path="/booking" exact component={Booking}/>
  <Route path="/signup" exact component={SignUp}/>
  
</Router>

</Fragment>
  );
}

export default App;
