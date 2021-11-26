import React from "react";
import logo from '../Assets/log_logo.jpg'
import { Link } from 'react-router-dom'
import './signUp.css'
function SignUp(){
    return(
          <div className='log_Container'>
             <img src={logo} alt="" class="img_logos"/> 
            <div className='log_content'>
                <div className='log_screen'>
                                <div className='log_logo'> 
                                    <img src={logo} alt="" class="img_logo"/>
                                
                                
                                </div>
                                <div className='log_top_text'>
                                        <div className='logo_text'>
                                            <h3>
                                                WELCOME
                                            </h3>

                                        </div>
                                        <div className='logo_text_sub'>
                                            Kindly input you correct information below

                                        </div>
                                </div>
                                
                                <div className='log_form'>

                                      <form className="log_form_ui_form">
                                          <div className='row'>
                                          <div className="wrap" data-validate = "Enter username">
                                                        <input className="input100" type="text" name="username" placeholder="User name"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    </div>

                                                    <div className="wrap " data-validate="Enter password">
                                                        <input className="input100 right" type="password" name="pass" placeholder="Password"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div>
                                          </div>


                                         
                                          <div className='row'>
                                          <div className="wrap " data-validate = "Enter username">
                                                        <input className="input100" type="text" name="username" placeholder="User name"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    </div>

                                                    <div className="wrap" data-validate="Enter password">
                                                        <input className="input100 right" type="password" name="pass" placeholder="Password"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div>
                                          </div>

                                         
                                          <div className='row'>
                                          <div className="wrap " data-validate = "Enter username">
                                                        <input className="input100" type="text" name="username" placeholder="User name"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    </div>

                                                    <div className="wrap " data-validate="Enter password">
                                                        <input className="input100 right" type="password" name="pass" placeholder="Password"/>
                                                        <span className="focus-input100 right" data-placeholder="&#xe80f;"></span>
                                                    </div>
                                          </div>  
                                          <div className='row'>
                                          <div className="wrap" data-validate = "Enter username">
                                                        <input className="input100" type="text" name="username" placeholder="User name"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    
                                                     <input className="input100 right" type="password" name="pass" placeholder="Password">
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span></input>
                                                  </div>

                                                    <div className="wrap right" data-validate="Enter password">
                                                         </div>
                                          </div>

                                                    </form>
                                     
                                
                                </div>

                          
                                <div className='submited_log_form'>
                                    <div className='submited_text'>
                                        Submit

                                    </div>
                                
                                </div>
                                <div className='register_log_form'>
                                    <div className='register_log_form_text'>
                                         <Link to = '/booking'>  <a href=''>Back to Sigin</a></Link>

                                    </div>
                                
                                </div>
                 </div>
            </div>
        </div>
      
  
    )
}
export default SignUp