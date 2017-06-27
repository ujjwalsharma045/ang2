import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  providers:[UserService]
})

export class UseraddComponent implements OnInit {
  public user = {
	  email:""
  }; 
  
  userForm: any;
  
  constructor(private userService:UserService,  private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
		this.userForm = this.formBuilder.group({
		  'username': ['', Validators.required],
		  'email': ['', [Validators.required]],
		  'password': ['', [Validators.required, Validators.minLength(10)]],
		  'firstname': ['', [Validators.required]],
		  'lastname': ['', [Validators.required]]
		});
  }
  
  userAdd(){
	    if(!this.userForm.invalid){
			this.userService.addUser(this.userForm.value).subscribe(result => {
				  //console.log(result);
				  if(result.success=="1"){
					 this.router.navigate(['./users']);	  
				  }
			});   
	    }
		else {
			console.log(this.userForm._touched);
		}
  }
  
  ngOnInit(){}  
}
