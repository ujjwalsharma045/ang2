import { Component, OnInit } from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { ActivatedRoute, Router} from '@angular/router';
//import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers:[UserService],
  directives: [FORM_DIRECTIVES]
})

export class UsereditComponent implements OnInit {
  private user = [];
  private userid;
  registrationForm: ControlGroup;
  username: Control;
  email: Control;
  first_name: Control;
  last_name: Control;
  submitAttempt: boolean = false;
  
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
     this.username = new Control('', Validators.required);
	 this.email = new Control('', Validators.required);
	 this.first_name = new Control('', Validators.required);
	 this.last_name = new Control('', Validators.required); 

     this.registrationForm = builder.group({
       username: this.username,
       email: this.email,
       first_name: this.first_name,
	   last_name: this.last_name
     }); 	 
  }

  ngOnInit() {
	  this.route.params.subscribe(params => {
          this.userid = params['id'];
      });
	  
	  this.userService.getUser(this.userid).subscribe(result => {
		  console.log(result.records[0]);
		  this.user  = result.records[0];		   
	  });	  
  }
  
  updateUser(user , id){
	  this.userService.updateUser(user , id).subscribe(result => {
		  console.log(result);
		  if(result.success=="1"){
		     this.router.navigate(['./users']);	  
		  }
	  });	  	  
  }
  
  registerUser(user) {
    this.submitAttempt = true;    
  }
}
