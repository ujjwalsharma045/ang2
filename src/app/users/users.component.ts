import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService]
})

export class UsersComponent implements OnInit {
	
  private userdetail;
  private search = {
	 name:"",
     email:"",
     username:"",
     created_at:""	 
  };
  
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { }
  
  userList(data){
	  if(data!=""){
		  this.userService.getUsers(data).subscribe(result => {
			   this.userdetail  = result.records;
		  });
	  }
	  else {
		  this.userService.getUsers("").subscribe(result => {
			   this.userdetail  = result.records;
		  });
	  }
  }
  
  deleteUser(id){
	  this.userService.removeUser(id).subscribe(result => {
		   if(result.success=="1"){
			  location.reload();
		   }		   
	  });
  }
  
  searchUser(){	  
	  return this.userList(this.search);
  }

  ngOnInit() {
	  this.userdetail = this.userList("");
  }
}
