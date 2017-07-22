import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http';
import { SettingService} from '../services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers:[SettingService]
})

export class SettingComponent implements OnInit {
	
    private settingUrl = 'http://localhost:8081/';
    private settings = [];
  
    constructor(private http: Http, private route: ActivatedRoute, private router: Router, public settingService:SettingService) { 
        
    }
    
    ngOnInit() {
		return this.http.get(this.settingUrl+"setting/list").map(res => res.json()).subscribe(result => {
		    console.log(result);
		    if(result.success=="1"){
			   this.settings = result.settings;
		    }
		});   
    }   
  
    update(){
		//console.log(form.value);
		console.log(this.settings);
		//alert(form.value);
	    //settingService.save(data);
		
        this.settingService.save(this.settings).subscribe(result => {
			console.log(result);
			if(result.success=="1"){
				 this.router.navigate(['./users']);	  
			}
		});   		
    }
}
