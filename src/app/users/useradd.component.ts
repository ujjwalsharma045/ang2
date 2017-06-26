import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css'],
  providers:[UserService]
})

export class UseraddComponent implements OnInit {
  public user = {
	  email:""
  }; 
  constructor(private userService:UserService,  private route: ActivatedRoute, private router: Router){ }
  
  userAdd(){
	  this.userService.addUser(this.user).subscribe(result => {
		  //console.log(result);
		  if(result.success=="1"){
		     this.router.navigate(['./users']);	  
		  }
	  }); 
  }
  
  ngOnInit(){}  
}
