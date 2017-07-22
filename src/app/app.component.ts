import { Component } from '@angular/core';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})

export class AppComponent {
	public host_id: "HOST_COMPONENT";
	public title:string = 'Angular 2, Nodejs & MongoDB CRUD';

	private userInfo = 'CRUD_USER_INFO';
    private reset = 'CRUD_RESET_FORM';
    private userList = 'CRUD_USER_LIST';
	
	private isLogin;
	constructor(private userService:UserService) { 
		if(!this.userService.is_loggedin()){	
			this.isLogin = false;
		}
		else {
				this.isLogin = true;
		}
	};	
}
