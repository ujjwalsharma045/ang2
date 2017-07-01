import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  providers:[UserService]
})

export class UseraddComponent implements OnInit {
	
  public user = {}; 
  
  userForm: FormGroup;
  private submitted = false;
  
  constructor(private userService:UserService,  private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
		/*this.userForm = this.formBuilder.group({
		  'username': ['', Validators.required],
		  'email': ['', [Validators.required]],
		  'password': ['', [Validators.required, Validators.minLength(10)]],
		  'firstname': ['', [Validators.required]],
		  'lastname': ['', [Validators.required]]
		});*/
		
		this.userForm = formBuilder.group({      
			  'username' : [null, Validators.required],      
			  'email': [null, Validators.required],
			  'password': [null, Validators.required],
			  'first_name' : [null, Validators.required],
			  'last_name' : [null, Validators.required]
        });
		
		
		if(!userService.is_loggedin()){			
			router.navigate(['./login']);
		}		
  }
  
  userAdd(){
	    this.submitted =true;	      
	    if(this.userForm.valid){ 		             			
			this.userService.addUser(this.userForm.value).subscribe(result => {
				  //console.log(result);
				  if(result.success=="1"){
					 this.router.navigate(['./users']);	  
				  }
			});   
	    }		
  }
  
  ngOnInit(){}  
}
