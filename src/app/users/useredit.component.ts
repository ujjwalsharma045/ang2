import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css'],
  providers:[UserService]
})

export class UsereditComponent implements OnInit {
  private user = [];
  private userid;
  
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	  this.route.params.subscribe(params => {
          this.userid = params['id'];
      });
	  
	  this.userService.getUser(this.userid).subscribe(result => {
		  console.log(result.records[0]);
		  this.user  = result.records[0];		   
	  });	  
  }
  
  updateUser(user , id){
	  this.userService.updateUser(user , id).subscribe(result => {
		  console.log(result);
		  if(result.success=="1"){
		     this.router.navigate(['./users']);	  
		  }
	  });	  	  
  }
}
