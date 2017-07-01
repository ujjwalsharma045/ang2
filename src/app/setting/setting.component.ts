import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  //providers:['SettingService']
})
export class SettingComponent implements OnInit {
	
  settingForm: FormGroup;
  private settingUrl = 'http://localhost:8081/';
  private settings = [];
  
  constructor(private http: Http, private formBuilder: FormBuilder) { 
     this.settingForm = formBuilder.group({      
	 });
  }
    
  ngOnInit() {
		  
		  return this.http.get(this.settingUrl+"setting/list").map(res => res.json()).subscribe(result => {
					  console.log(result);
					  if(result.success=="1"){
						 this.settings = result.settings;
					  }
		  });   
   }   
  
   save(data){
	 //settingService.save(data); 
   }

}
