import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
  providers:[UserService]
})

export class UserviewComponent implements OnInit {
  
  public user = [];
  
  private userid;
  
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { 
      if(!userService.is_loggedin()){			
	    router.navigate(['./login']);
	  }
  }
   
  ngOnInit() {
	  this.route.params.subscribe(params => {		    
           this.userid = params['id']; 			
      });	  

      this.userService.getUser(this.userid).subscribe(result => {
		  console.log(result.records[0]);
		  this.user  = result.records[0];		   
	  });	  
  }
}
