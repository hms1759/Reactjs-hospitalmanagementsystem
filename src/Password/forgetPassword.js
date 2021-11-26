
import React from "react";
import logo from '../Assets/log_logo.jpg';
import '../Booking/login.css'
import { Link } from 'react-router-dom'

function ForgetPassword(){
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
                                           Forget Password
                                        </h3>

                                    </div>
                                    <div className='logo_text_sub'>
                                        Input your email address

                                    </div>
                            </div>
                            
                            <div className='log_form'>

                                  <form className="log_form_ui_form">

                                                <div className="wrap" data-validate = "Enter email">
                                                    <input className="input100" type="email" name="" placeholder="E-mail"/>
                                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                                </div>
                                                <br/>

                                             

                                                </form>
                                 
                            
                            </div>
                        
                            <div className='submited_log_form'>
                                <div className='submited_text'>
                                    Submit

                                </div>
                            
                            </div>    
                            <div className='log_form_tex'>
                                  <div className='forgetPassword_text'>
                                  <Link to = '/booking'> <a href=''>Signin</a></Link>

                                 </div>
                            
                            </div>
             </div>
        </div>
    </div>
    )
}

export default ForgetPassword


