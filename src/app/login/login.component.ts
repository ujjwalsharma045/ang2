import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {
    loginForm:FormGroup;
    forgetpasswordForm:FormGroup;
    private submitted = false;
    private forgotsubmitted = false;
    constructor(private userservice:UserService, private frmbuilder:FormBuilder, private router:Router, private route:ActivatedRoute, private popup:Popup) { 
        this.loginForm = frmbuilder.group({
		   'username':[null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
		   'password':[null,  Validators.required]
	    });
		this.forgetpasswordForm = frmbuilder.group({
		   'email':[null, Validators.compose([Validators.required, Validators.minLength(4)])] 
	    });
	    //overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
	    if(this.userservice.is_loggedin()){			
			this.router.navigate(['./']);
		}
    }
  
    login(){
		alert("fghd"); 
		this.submitted = true;
		if(this.loginForm.valid){
			this.userservice.authenticate(this.loginForm.value).subscribe(result => {
				console.log(result);
				if(result.success==1){
				   alert("cfgh");
				   localStorage.setItem('is_logged_in' , '1');
				   this.router.navigate(['./users']);	  
				}
				else {
				  
				}
			});   
		}	 
    }
  
    logout(){
	    localStorage.removeItem('is_logged_in');
    }
	
	ClickButton(){
	    this.popup.options = {
			header: "Forget Password",
			//color: "#5cb85c", // red, blue.... 
			widthProsentage: 40, // The with of the popou measured by browser width 
			animationDuration: 1, // in seconds, 0 = no animation 
			showButtons: true, // You can hide this in case you want to use custom buttons 
			confirmBtnContent: "Submit", // The text on your confirm button 
			cancleBtnContent: "Cancel", // the text on your cancel button 
			//confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
			//cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
			animation: "fadeInRight" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };	
		
        this.popup.show(this.popup.options);
    }
	
	sendPasswordRequest(){
	    this.forgotsubmitted = true;
		if(this.forgetpasswordForm.valid){
			//alert("fghe");
			console.log(this.forgetpasswordForm.value);
			this.userservice.sendpassword(this.forgetpasswordForm.value).subscribe(result => {
				if(result.success==1){
					  
				}
			});
		}
	}
}
