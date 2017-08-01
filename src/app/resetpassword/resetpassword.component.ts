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
	usertoken:any
	private accessible = false;
    constructor(private userService:UserService, private router:Router, private route: ActivatedRoute, private formBuilder: FormBuilder){ 	
	    this.resetpasswordForm = formBuilder.group({
		    newpassword:[null , Validators.required],
		    confirmpassword:[null , Validators.required]
	    } , {validator: this.passwordValidator('newpassword', 'confirmpassword')});
	}

    ngOnInit(){
		this.route.params.subscribe(params => {
            this.usertoken = params['token'];
        });
		
		this.userService.getTokenDetail({token:this.usertoken}).subscribe(result => {
			//console.log(result);
			if(result.success=="1"){
				this.accessible = true;
			}
		});   
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
	
	passwordValidator(passwordKey: string, passwordConfirmationKey: string){
	    return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey];
            let passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if(passwordConfirmationInput.value!="" && passwordInput.value!="" && passwordInput.value !== passwordConfirmationInput.value){
                return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
				if(passwordConfirmationInput.value=="")
                  return passwordConfirmationInput.setErrors({required:true});
			    else 
				  return passwordConfirmationInput.setErrors(null); 	
            }  
        }	
	}
}
