import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FrontuserService} from '../services/frontuser.service';
import { FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
//import { bootstrap } from "angular2/platform/browser";
import { EqualTextValidator } from "angular2-text-equality-validator";
@Component({
  selector: 'app-frontuser',
  templateUrl: './frontuser.component.html',
  styleUrls: ['./frontuser.component.css'],
  providers:[FrontuserService]
})

export class FrontuserComponent implements OnInit {
    private frontuserForm:FormGroup;
	private frontuserpasswordForm:FormGroup;
    private sectionTitle = 'Edit Profile';
	private submitted = false;
	private forgotsubmitted = false;
	formData:FormData;
	fileList:any;
	private param:string[]=[]; 
	private displaymode = "profile";
    constructor(private frontuser_service:FrontuserService, private route:ActivatedRoute, private router: Router,  private formBuilding: FormBuilder) {
        this.passwordValidator = this.passwordValidator.bind(this); 		
        this.frontuserForm = formBuilding.group({
			'email':[null, Validators.required],
			'first_name':[null, Validators.required],
            'last_name':[null, Validators.required],
            'profile_pic':[null, Validators.required],
            'dateofbirth':[null, Validators.required] 			
		});
		
		this.frontuserpasswordForm = formBuilding.group({
			'oldpassword':["", Validators.required],
			'newpassword':["", Validators.required],
            'confirmpassword':["", Validators.required]
        }, {validator: this.passwordValidator('newpassword', 'confirmpassword')});
    }

    ngOnInit() {
		
    }
	
	userAdd(){
		this.submitted = true;
		
	    this.param['first_name'] = this.frontuserForm.value.first_name;
		this.param['last_name'] = this.frontuserForm.value.last_name;
		this.param['email'] = this.frontuserForm.value.email;
		this.param['dob'] = this.frontuserForm.value.dateofbirth;
		
		this.frontuser_service.makeFileRequest(this.param, this.fileList).subscribe(result => {
			//console.log(result);
			if(result.success=="1"){
				this.router.navigate(['./users']);	  
			}
		});
		
		//console.log(this.frontuserForm.value);
		//console.log(this.formData);
		/*this.frontuser_service.update(this.frontuserForm.value,this.formData).subscribe(result => {
				//console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./users']);	  
				}
		});*/   
	}
	
	fileChange(fileInput:any){
		this.fileList = fileInput.target.files;
        /*if(this.fileList.length > 0) {
			let file: File = this.fileList[0];
			this.formData  = new FormData();
			alert(file.name);
			this.formData.append('uploads', file, file.name);
			console.log(this.formData);*/
			/*let headers = new Headers();
			  headers.append('Content-Type', 'multipart/form-data');
			  headers.append('Accept', 'application/json');
			  let options = new RequestOptions({ headers: headers });
			  this.http.post(${this.apiEndPoint}, formData, options).map(res => res.json())
				.catch(error => Observable.throw(error))
				.subscribe(
					data => console.log('success'),
					error => console.log(error)
				)*/
       //}
	}
	
	update(){
		this.forgotsubmitted = true;
		console.log(this.frontuserpasswordForm.value);
		if(this.frontuserpasswordForm.valid){
			this.frontuser_service.updatePassword(this.frontuserpasswordForm.value).subscribe(result => {
				console.log(result);
				if(result.success=="1"){
					this.router.navigate(['./users']);	  
				}
			});
		}
	}
	
	passwordValidator(passwordKey: string, passwordConfirmationKey: string){
		//console.log(this.frontuserpasswordForm);
	    return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
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
	
	setdisplaymode(type){
		this.displaymode = type;  
	}
}
