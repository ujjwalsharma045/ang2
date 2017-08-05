import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
}) 
 
export class RegisterComponent implements OnInit {
	
	registerForm:FormGroup;
	private submitted = false;
	private sectionTitle = 'Register'; 
    constructor(public userservice:UserService, public route:ActivatedRoute, public router:Router, public formbuilder:FormBuilder) { 
		this.registerForm = this.formbuilder.group({
		    'username':[null, Validators.required],
            'password':[null, Validators.required],
			'email':[null, Validators.required],
            'first_name':[null, Validators.required],
            'last_name':[null, Validators.required], 
            'dateofbirth':[null, Validators.required] 			
		});
    }

    ngOnInit(){
		
	}

    register(){
		this.submitted = true;
		if(this.registerForm.valid){
			this.userservice.Register(this.registerForm.value).subscribe(result => {
				//console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./users']);	  
				}
			});
		}
	} 
}