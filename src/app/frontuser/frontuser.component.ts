import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FrontuserService} from '../services/frontuser.service';
import { FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
//import { bootstrap } from "angular2/platform/browser";

@Component({
  selector: 'app-frontuser',
  templateUrl: './frontuser.component.html',
  styleUrls: ['./frontuser.component.css'],
  providers:[FrontuserService]
})

export class FrontuserComponent implements OnInit {
    frontuserForm:FormGroup;
	
    private sectionTitle = 'Edit Profile';
	private submitted = false;
	formData:FormData;
	fileList:any;
    constructor(private frontuser_service:FrontuserService, private route:ActivatedRoute, private router: Router,  private formBuilding: FormBuilder) { 
        this.frontuserForm = formBuilding.group({
			'email':[null, Validators.required],
			'first_name':[null, Validators.required],
            'last_name':[null, Validators.required],
            'profile_pic':[null, Validators.required],
            'dateofbirth':[null, Validators.required] 			
		});
    }

    ngOnInit() {
		
    }
	
	userAdd(){
		this.submitted = true;
	
		this.frontuser_service.makeFileRequest([], this.fileList).subscribe(result => {
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
       // }
	}

}
