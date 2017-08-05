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
	private fileList:any="";
    private submitted = false;
    private sectionTitle = 'Edit User';
    constructor(private userService:UserService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder){ 
		this.userForm = formBuilder.group({
		  // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
		  // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
		  'first_name' : [null, Validators.required],
		  'last_name' : [null, Validators.required],
		  'address' : [null, Validators.required],
		  'city' : [null, Validators.required],
		  'state' : [null, Validators.required],
		  'profile_pic' : [null],
		  'dateofbirth':[null, Validators.required]
		});            
	
		if(!userService.is_loggedin()){			
		   router.navigate(['./login']);
		}
    }

    ngOnInit() {
	    this.route.params.subscribe(params => {
            this.userid = params['id'];
        });
		
	    this.sectionTitle = this.sectionTitle+' '+this.userid;
		
	    this.userService.getUser(this.userid).subscribe(result => {
		    console.log(result.records[0]);
		    console.log(this.userForm);
			if(result.records[0]){
		     result.records[0].profile_pic = null;		
		     this.userForm.patchValue(result.records[0]);
             //this.userForm.value.first_name = result.records[0].first_name;
			 //this.userForm.value.last_name = result.records[0].last_name;
			 //this.userForm.value.address = result.records[0].address;
			 //this.userForm.value.city = result.records[0].city;
			 //this.userForm.value.state = result.records[0].state;
			 //this.userForm.value.dateofbirth = result.records[0].dateofbirth;
			}
			
	    });	  
    }
  
    updateUser(){
        this.submitted =true;	
      
	    if(this.userForm.valid){
		    /*this.user = {
			    first_name:this.userForm.value['first_name'],
                last_name:this.userForm.value['last_name']			
		    };*/
		  
		    /*this.userService.updateUser(this.user , this.userid).subscribe(result => {
			    console.log(result);
			    if(result.success=="1"){
				   this.router.navigate(['./users']);	  
			    }
		    });*/

            this.userService.makeFileRequest(this.userForm.value, this.fileList, "edit", this.userid).subscribe(result => {
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
}
