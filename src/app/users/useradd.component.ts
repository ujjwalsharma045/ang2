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
    private sectionTitle = 'Add User';
	private fileList:any;
    constructor(private userService:UserService,  private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
		/*this.userForm = this.formBuilder.group({
		  'username': ['', Validators.required],
		  'email': ['', [Validators.required]],
		  'password': ['', [Validators.required, Validators.minLength(10)]],
		  'firstname': ['', [Validators.required]],
		  'lastname': ['', [Validators.required]]
		});*/
		
		this.userForm = formBuilder.group({      
			'username':[null, Validators.required],      
			'email':[null, Validators.required],
			'password':[null, Validators.required],
			'first_name':[null, Validators.required],
			'last_name':[null, Validators.required],
			'address' : [null, Validators.required],
		    'city' : [null, Validators.required],
		    'state' : [null, Validators.required],
			'profile_pic':[''],
			'dateofbirth':[null, Validators.required]
        });
		
		
		if(!this.userService.is_loggedin()){			
			this.router.navigate(['./login']);
		}		
    }
  
    userAdd(){
	    this.submitted =true;	      
	    if(this.userForm.valid){ 		             			
			/*this.userService.addUser(this.userForm.value).subscribe(result => {
				//console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./users']);	  
				}
			});*/ 
            this.userService.makeFileRequest(this.userForm.value, this.fileList , "add" ,"").subscribe(result => {
				//console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./users']);	  
				}
			}); 			
	    }		
    }
	
	fileChange(fileInput:any){
		this.fileList = fileInput.target.files;
    }
      
    ngOnInit(){}  
}
