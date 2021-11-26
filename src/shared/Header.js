import React from "react";
import { Link } from 'react-router-dom';
import logo  from '../Assets/imagelogo/logo.png'


function Header(){
    return( 
        <header className="top-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container hdcenter">
                
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="" />
                        
                    </a>
                    <div className="row ftcenter">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                
                        <div className="collapse right navbar-collapse" id="navbars-rs-food">
                            <ul className="navbar-nav ml-auto">
                              <Link to = '/'> 
                                <li className="nav-item active"><a className="nav-link" >Home</a></li>
                               </Link> 
                               <Link to = '/About'> 
                                <li className="nav-item"><a className="nav-link" >About Us</a></li>
                               </Link>
                                <Link to = '/Contact'> 
                                <li className="nav-item"><a className="nav-link" >Contact</a></li>
                                </Link>
                                <Link to = '/booking'>
                                     <li className="nav-item "><a className="nav-link">Booking</a></li>
                                     </Link>
                      </ul>
                        </div>
                    </div> 
                 </div> 
                        
                
            </nav>
            <br></br><br></br>
        </header>
        
    );
   
}

export default  Header;