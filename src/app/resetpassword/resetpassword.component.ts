import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
  providers: [UserService]
})

export class ResetpasswordComponent implements OnInit {
    private submitted =false;
	resetpasswordForm:FormGroup;
    constructor(private userService:UserService, private router:Router, private route: ActivatedRoute, private formBuilder: FormBuilder){ 	
	    this.resetpasswordForm = formBuilder.group({
		    newpassword:[null , Validators.required],
		    confirmpassword:[null , Validators.required]
	    });
	}

    ngOnInit(){
		
    }

    resetPassword(){
	    this.submitted = true;
	    if(this.resetpasswordForm.valid){
			this.userService.resetPassword(this.resetpasswordForm.value).subscribe(result => {
				//console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./login']);	  
				}
			});   
		} 
    } 
}
