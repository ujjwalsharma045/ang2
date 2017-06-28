import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers:[UserService]
})

export class UsereditComponent implements OnInit {
	
  private user = {};
  private userid;

  userForm: FormGroup;
  private submitted = false;
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
    this.userForm = formBuilder.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'username' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'email': [null, Validators.required],
      'first_name' : [null, Validators.required],
      'last_name' : [null, Validators.required]
    });            
  }

  ngOnInit() {
	  this.route.params.subscribe(params => {
          this.userid = params['id'];
      });
	  
	  this.userService.getUser(this.userid).subscribe(result => {
		  //console.log(result.records[0]);
		  console.log(this.userForm);
		  this.userForm.patchValue(result.records[0]);		   
	  });	  
  }
  
  updateUser(user , id){
      this.submitted =true;	
      
	  if(this.userForm.valid){
		  this.user = {
			 username:this.userForm.value['username'],
             email:this.userForm.value['email'],
             first_name:this.userForm.value['first_name'],
             last_name:this.userForm.value['last_name']			
		  };
		  
		  this.userService.updateUser(this.user , this.userid).subscribe(result => {
			  console.log(result);
			  if(result.success=="1"){
				 this.router.navigate(['./users']);	  
			  }
		  });	  	  
	  }
	  
	  
  }    
}
