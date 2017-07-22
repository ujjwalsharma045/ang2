import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})

export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  private submitted = false;
  constructor(private userservice:UserService, private frmbuilder:FormBuilder, private router: Router, private route: ActivatedRoute) { 
     this.loginForm = frmbuilder.group({
		 'username':[null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
		 'password':[null,  Validators.required]
	 });
  }

  ngOnInit() {
	    if(this.userservice.is_loggedin()){			
			this.router.navigate(['./']);
		}
  }
  
  login(){
	  //alert("fghd"); 
	  this.submitted = true;
	  if(this.loginForm.valid){
		  this.userservice.authenticate(this.loginForm.value).subscribe(result => {
				  //console.log(result);
				  if(result.success=="1"){
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
}
