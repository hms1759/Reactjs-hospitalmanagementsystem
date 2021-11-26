
import React from "react";
import logo from '../Assets/log_logo.jpg'
import './login.css'
import { Link } from 'react-router-dom'


function Login(){
    return(
        
        <div className='log_Container'>
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
                                            Sign in by entering the information below

                                        </div>
                                </div>
                                
                                <div className='log_form'>

                                      <form className="log_form_ui_form">

                                                    <div className="wrap" data-validate = "Enter username">
                                                        <input className="input100" type="text" name="username" placeholder="Username"/>
                                                        <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                    </div>
                                                    <br/>

                                                    <div className="wrap" data-validate="Enter password">
                                                        <input className="input100" type="password" name="pass" placeholder="Password"/>
                                                        <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                                    </div>

                                                 

                                                    </form>
                                     
                                
                                </div>

                                <div className='log_form_tex'>
                                 
                                      <div className='forgetPassword_text'>
                                      <Link to = '/forgetpwd'>  
                                        <a href=''>forget password</a>
                                        </Link>
                                 
                                         </div>
                                 
                                </div>
                                <div className='submited_log_form'>
                                    <div className='submited_text'>
                                        Submit

                                    </div>
                                
                                </div>
                                <div className='register_log_form'>
                                    <div className='register_log_form_text'>
                                        Dont have account click  <Link to = '/signup'>  <a href=''>here</a></Link>

                                    </div>
                                
                                </div>
                 </div>
            </div>
        </div>
      
            
       
    )
}
export default Login