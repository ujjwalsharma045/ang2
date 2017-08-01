import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {URLSearchParams} from '@angular/http'

@Injectable()
export class UserService {
   
    constructor(private http: Http) { }
     
    private userUrl = 'http://localhost:8081/';
    private is_authenticated;
    
	getUsers(data){
		if(data!=""){			  
			let params = new URLSearchParams();
			for(let key in data){
				params.set(key, data[key]) 
			}
			 
			return this.http.get(this.userUrl+"showusers?"+params.toString()).map(res => res.json()); 
		}
		else {
			return this.http.get(this.userUrl+"showusers").map(res => res.json());
		}	  
    }

    getUser(id){
	    return this.http.get(this.userUrl+"view/"+id).map(res => res.json());
    }
 
    updateUser(user , id){
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.post(this.userUrl+"edit/"+id, user, options).map(res => res.json()); 	  
    }
  
    addUser(user){
	    console.log(user);
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.post(this.userUrl+"adduser", user, options).map(res => res.json()); 	  
    }

    removeUser(id){
	    return this.http.delete(this.userUrl+"delete/"+id).map(res => res.json()); 	  	  
    }  
  
    authenticate(user){
	    console.log(user);
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.post(this.userUrl+"login", user, options).map(res => res.json()); 	  	  
    }
  
    is_loggedin(){
	    this.is_authenticated = localStorage.getItem('is_logged_in');
	    return (this.is_authenticated == 1)? true:false;		  
    }
  
    logout(){
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.post(this.userUrl+"logout", {}, options).map(res => res.json())
    }
  
    sendpassword(data){
	    let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.get(this.userUrl+"user/recoverpassword?email="+data.email).map(res => res.json());
    }
	
	resetPassword(data){
		let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
	    return this.http.get(this.userUrl+"user/resetpassword?password="+data.newpassword).map(res => res.json());
	}
}
