import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http'

@Injectable()
export class PageService {

  constructor(public http: Http) { }
  private pageUrl = 'http://localhost:8081/';
  
    list(){
	  
    }
    
	add(page){
		let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
		return this.http.post(this.pageUrl+"page/add" , page , options).map(res => res.json());
	} 
	
	edit(page , pageid){
		let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
		return this.http.post(this.pageUrl+"page/edit/"+pageid , page , options).map(res => res.json());
	}
  
    view(pageid){
		return this.http.get(this.pageUrl+"page/view/"+pageid).map(res => res.json());
	}
}
