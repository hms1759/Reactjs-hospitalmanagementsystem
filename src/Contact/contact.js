import React from "react";
import Phone from "@material-ui/icons/Phone"
import Maker from "@material-ui/icons/LocalBar"
import Email from "@material-ui/icons/Email"

function ContactUs(){
    return(
        <div>
<div id='Contact' class="contact-imfo-box">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<i class={"fa fa-volume-control-phone"}><Phone/></i>
					<div class="overflow-hidden">
						<h4>Phone</h4>
						<p class="lead">
							+2348068783985
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<i class="fa fa-envelope"><Email/></i>
					<div class="overflow-hidden">
						<h4>Email</h4>
						<p class="lead">
							myhotel@gmail.com
						</p>
					</div>
				</div>
				<div class="col-md-4">
					<i class="fa fa-map-marker"><Maker/></i>
					<div class="overflow-hidden">
						<h4>Location</h4>
						<p class="lead">
							Ikorodu Garage  Lagos State, Nigeria 
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
		
        </div>
    )}
    export default ContactUs