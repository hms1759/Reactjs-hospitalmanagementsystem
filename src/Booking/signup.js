import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './signUp.css'
import { Form,ModalTitle, Button, Col, Row} from "react-bootstrap";
import Snackbar from '@material-ui/core/Snackbar';
import  IconButton from "@material-ui/core/IconButton";


export class  SignUp extends Component{
      constructor(props){
            
        super(props);
        this.state =  {snackbaropen: false, snackbarmsg: ''};
        this.handleSubmit= this.handleSubmit.bind(this)
        
     
      };
      snackbarClose= (event)=>{
        this.setState({snackbaropen: false});
      };
          

    handleSubmit(event){
    event.preventDefault();
    fetch(process.env.HMS_APP_API+"Visitor/creatVisitor",
    //fetch('http://localhost:17145/api/Visitor/creatVisitor',
    {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Aontent-Type' : 'application/json'
        },
        body: JSON.stringify({
            Id:null,
            Name:event.target.Name.value,
            Email:event.target.Email.value,
            Address:event.target.Address.value,
            Password : event.target.Password.value,
            Phone: event.target.Phone.value,
        })
    }
 
    )
   
        .then(res=> res.json())
        .then((result)=>{
          //  alert(result);
          this.setState({snackbaropen:true, snackbarmsg: result});
        },
        (error)=>{
            //alert('Failed')

            
          this.setState({snackbaropen:true, snackbarmsg: "Failed"});
        })
   
    }
    // handleChange(event) {
    //     let input = this.state.input;
    //     input[event.target.name] = event.target.value;
      
    //     this.setState({
    //       input
    //     });
    //   }
         
    //   handleSubmit(event) {
    //     event.preventDefault();
      
    //     if(this.validate()){
    //         console.log(this.state);
      
    //         let input = {};
    //         input["name"] = "";
    //         input["email"] = "";
    //         input["phone"] = "";
    //         input["password"] = "";
    //         input["confirm_password"] = "";
    //         this.setState({input:input});
      
    //         alert('Demo Form is submited');
    //     }
    //   }

    //   validate(){
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;
    
    //     if (!input["name"]) {
    //       isValid = false;
    //       errors["name"] = "Please enter your name.";
    //     }
    
    //     if (!input["email"]) {
    //       isValid = false;
    //       errors["email"] = "Please enter your email Address.";
    //     }
    
    //     if (typeof input["email"] !== "undefined") {
            
    //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //       if (!pattern.test(input["email"])) {
    //         isValid = false;
    //         errors["email"] = "Please enter valid email address.";
    //       }
    //     }



    //     if (!input["phone"]) {
    //         isValid = false;
    //         errors["phone"] = "Please enter your  Phone number.";
    //       }
      
    //       if (typeof input["phone"] !== "undefined") {
              
    //         var pattern = new RegExp(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i);
    //         if (!pattern.test(input["phone"])) {
    //           isValid = false;
    //           errors["phone"] = "Please enter a currect phone number.";
    //         }
    //       }


    
    //     if (!input["password"]) {
    //       isValid = false;
    //       errors["password"] = "Please enter your password.";
    //     }
    
    //     if (!input["confirm_password"]) {
    //       isValid = false;
    //       errors["confirm_password"] = "Please enter your confirm password.";
    //     }
    
    //     if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
    //       if (input["password"] != input["confirm_password"]) {
    //         isValid = false;
    //         errors["password"] = "Passwords don't match.";
    //       }
    //     } 
    
    //     this.setState({
    //       errors: errors
    //     });
    
    //     return isValid;
    // }
    render(){

  
    return(
        
        
        
        <div className='signup_Container'>
            <div className='sign_content'>

           
            <div className='signup_content'>
                <div className='log_screen'>
                                
                                <div className='log_top_text'>
                                        <div className='logo_text'>
                                            <h3>
                                               SIgn UP
                                            </h3>

                                        </div>
                                        <div className='logo_text_sub'>
                                           Kindly enter ur correct information below

                                        </div>
                                </div>
                                
                                <div className='log_form'>
                                  <Form onSubmit={this.handleSubmit} >
                                   < Form.Group controlId="Name">
                                     {/* <Form.Label>  Full name </Form.Label> */}
                                     <Form.Control
                                            type="text" 
                                            name="Name" 
                                            placeholder="Fullname" 
                                            
                                    />
                                       

                                   </Form.Group>

                                   < Form.Group controlId="Phone">
                                     {/* <Form.Label>  Phone Number </Form.Label> */}
                                     <Form.Control
                                            type="text" 
                                            name="Phone" 
                                            placeholder="Phone Number " 
                                            
                                    />
                                       

                                   </Form.Group>
                                   
                                   < Form.Group controlId="Email">
                                     {/* <Form.Label>  Email </Form.Label> */}
                                     <Form.Control
                                            type="text" 
                                            name="Email" 
                                            placeholder="Email" 
                                            
                                    />
                                       

                                   </Form.Group>
                                   
                                   < Form.Group controlId="Address">
                                     {/* <Form.Label>  Address </Form.Label> */}
                                     <Form.Control
                                            type="text" 
                                            name="Address" 
                                            placeholder="Address" 
                                           
                                    />
                                       

                                   </Form.Group>

                                   < Form.Group controlId="Password">
                                    {/* // <Form.Label>  Password </Form.Label> */}
                                     <Form.Control
                                            type="text" 
                                            name="Password" 
                                            placeholder="Password" 
                                           
                                    />
                                       

                                   </Form.Group>
                                    <Form.Group>
                                    <button type="submit" class="btn btn-primary submited_reg_form btn-block">
                                                        Submit
                                                        </button>

                                    </Form.Group>

                                  </Form>

                                      {/* <form className="log_form_ui_form" onSubmit={this.handleSubmit}>
                                      <div class="form-group">
           
                                            <input 
                                            type="text" 
                                            name="name" 
                                            value={this.state.input.name}
                                            onChange={this.handleChange}
                                            class="form-control" 
                                            placeholder="Fullname" 
                                            id="name" />
                                
                                            <div className="text-danger">{this.state.errors.name}</div>
                                          </div>
                                                    {/* <div className="wrap" data-validate = "Fullname">
                                                        <input className="input100" type="text" name="name" placeholder="Fullname"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    </div>

                                                    <div className="wrap" data-validate="Email">
                                                        <input className="input100" type="Email" name="email" placeholder="Email" required/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div> 
                                                    <div className="wrap" data-validate="Phone number">
                                                        <input className="input100" type="text" name="phoneNumber" placeholder="Phone number" />
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div>
                                                     <div className="wrap" data-validate="Address">
                                                        <input className="input100" type="text" name="address" placeholder="Address"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div>
                                                     <div className="wrap" data-validate="Enter password">
                                                        <input className="input100" type="password" name="password" placeholder="Password"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div> 
                                                    <div className="wrap" data-validate="Confirm password">
                                                        <input className="input100" type="password" name="confirm_password" placeholder="Confirm Password"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div> 



                                                    <button type="submit" class="btn btn-primary submited_reg_form btn-block">
                                                        Submit
                                                        </button>
                                                           

                                                    </form>
                                      */}
                                
                                </div>

                               
       
                                <div className='register_log_form'>
                                    <div className='register_log_form_text'>
                                         <Link to = '/booking'>  <a href=''>Back</a></Link>

                                    </div>
                                
                                </div>
                 </div>
            </div> 
            </div>
        </div>
      
  
    )
}
}
export default SignUp