import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
    return(
<div>
          	
	
	
	<footer class="footer-area bg-f">
		<div class="container">
			<div class="row ftcenter">
				<div class="col-lg-3 col-md-6">
					<h3>About Us</h3>
					<p>Integer cursus scelerisque ipsum id efficitur. 
						Donec a dui fringilla, gravida lorem ac, 
						semper magna. Aenean rhoncus ac lectus a
						 interdum. Vivamus semper posuere dui, at ornare
						  turpis ultrices sit amet. Nulla cursus lorem ut 
						  nisi porta, ac eleifend arcu ultrices.</p>
						
						  <form class="subscribe_form">
						 		 <Link to = '/About'> <a className="nav-link" >
									
							    <button type="submit" class="submit">About Us</button>
								</a>
                               </Link>		
							</form>
				</div>
				
				<div class="col-lg-3 col-md-6">
					<h3>Contact information</h3>
					<p class="lead">Ipsum Street, Lorem Tower, MO, Columbia, 508000</p>
					<p class="lead"><a href="#">+2348068783985</a></p>
					<p><a href="#"> info@admin.com</a></p>
				</div>
				<div class="col-lg-3 col-md-6">
					<h3>Place reservation  </h3>
					<div class="subscribe_form">
							<Link to = '/booking'> 
									
									<button type="submit" class="submit">Make Order</button>
									
								</Link>	
					</div>
					<ul class="list-inline f-social">
						<li class="list-inline-item"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<p class="company-name">All Rights Reserved. &copy; 2021 <a href="#">CodeWeb Business Solution</a> Design By : 
					<a href="https://html.design/"><i>hms</i></a></p>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
	</div>
    )

}
export default Footer