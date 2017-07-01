import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[UserService]
})

export class HeaderComponent implements OnInit {

  private userloggedin;
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { 
       
  }

  ngOnInit() {
	   this.route.params.subscribe(params => {
		   alert("dfg");
              if(!this.userService.is_loggedin()){	
			    this.userloggedin = false;
			  }
			  else {
					this.userloggedin = true;
			  }
              console.log('New route params');
       });  			   
  }
  
  signout(){
	 this.userService.logout().subscribe(result => {
		  console.log(result);
		  if(result.success=="1"){
			 localStorage.removeItem('is_logged_in');
			 this.router.navigate(['/login']);	  
		  }
	 });	  	
  } 
}
