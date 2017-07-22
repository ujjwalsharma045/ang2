import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';

@Injectable()
export class SettingService {
    
	constructor(public http:Http) { }
    private settingUrl = 'http://localhost:8081/';
    private data;
    save(data){
		this.data = { settings:data };
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.post(this.settingUrl+'setting/add', this.data , options).map(res => res.json());
    }
}
