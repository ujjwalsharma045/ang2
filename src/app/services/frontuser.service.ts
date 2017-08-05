import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FrontuserService {
    constructor(public http: Http) { } 
    private profileUrl = 'http://localhost:8081/';	 
    /*update(data,formdata){
	    let headers = new Headers();
		
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		//headers.append('Content-Type','application/json');
		headers.append('Accept', 'application/json');
		let options = new RequestOptions({ headers: headers });
		console.log(data);
		data['formdata'] = formdata;
		console.log(formdata);
		return this.http.post(this.profileUrl+"adduser" , formdata , options).map(res => res.json());
    }*/
	
	public makeFileRequest(params: string[], file: File[]): Observable<any> {
		return Observable.create(observer => {
			let formData: FormData = new FormData(),
			xhr: XMLHttpRequest = new XMLHttpRequest();
			formData.append("uploads", file[0], file[0].name);
			formData.append("first_name", params['first_name']);
			formData.append("last_name", params['last_name']);
			formData.append("email", params['email']);
			formData.append("dateofbirth", params['dob']);
			xhr.onreadystatechange = () => {
				if(xhr.readyState === 4){
					if(xhr.status === 200){
						observer.next(JSON.parse(xhr.response));
						observer.complete();
					} 
					else {
						observer.error(xhr.response);
					}
				}
			};

			/*hr.upload.onprogress = (event) => {
				this.progress = Math.round(event.loaded / event.total * 100);
				this.progressObserver.next(this.progress);
			};*/
            console.log(formData);
			xhr.open('POST', this.profileUrl+'user/adduser', true);
			xhr.send(formData);
		});
    }
	
	public updatePassword(data){
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
		return this.http.post(this.profileUrl+"user/editpassword" , data , options).map(res => res.json());
	}
}
