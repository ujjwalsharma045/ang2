import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import { PagerService } from '../services/pager.service';
import {Popup} from 'ng2-opd-popup';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UserService, PagerService]
})

export class UsersComponent implements OnInit {
  	
  private userdetail;
  private deleteuserid;
  private search = {
	 first_name:"",
     email:"",
     username:"",
     created_at:"",
     page:1,
     sortfield:'_id',     	
     sorttype:'asc'	 
  };
 
  private allItems: any; 
  private pageSize: any; 
  private currentPage = 1;
  private sortreverse = true;  
    
  pager: any = {};
  
  pagedItems: any[];
  
  private sectionTitle = 'Users';
  
  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router, private pagerService: PagerService, private popup:Popup) {   
       if(!userService.is_loggedin()){			
	     router.navigate(['./login']);
	   }	 
  }
  
  userList(data){
	  if(data!=""){		   
		  this.userService.getUsers(data).subscribe(result => {
			   this.userdetail = result.records;
			   this.allItems = result.totalrecords;
			   this.pageSize = result.totalpages;
			   this.setPage(this.currentPage);
		  });
	  }
	  else {		  
		  this.userService.getUsers(data).subscribe(result => {
			   this.userdetail  = result.records;
			   this.allItems = result.totalrecords;
			   this.pageSize = result.totalpages;
			   this.setPage(this.currentPage);
		  });
	  }
  }
  
  setPage(page: number) {
	  if(page < 1 || page > this.pager.totalPages){
		 return;
	  }	  
	  	  	  
	  // get pager object from service
	  this.pager = this.pagerService.getPager(this.allItems, page, this.allItems/this.pageSize);
       
	  // get current page of items
	  //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  
  deleteUser(){
	    this.userService.removeUser(this.deleteuserid).subscribe(result => {
		    if(result.success=="1"){
			   location.reload();
		    }		   
	    });
  }
  
  deleteUserConfirm(id){
	    this.deleteuserid = id; 
	    this.popup.options = {
			header: "Your custom header",
			color: "#5cb85c", // red, blue.... 
			widthProsentage: 40, // The with of the popou measured by browser width 
			animationDuration: 1, // in seconds, 0 = no animation 
			showButtons: true, // You can hide this in case you want to use custom buttons 
			confirmBtnContent: "Yes", // The text on your confirm button 
			cancleBtnContent: "Cancel", // the text on your cancel button 
			confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
			cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
			animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
        };
	   
	    this.popup.show(this.popup.options);
    }
  
    searchUser(){	        
        this.currentPage = 1;
	    this.search.page = this.currentPage;
	    this.userList(this.search);
    }
  
    paging(pageno){	  
        this.currentPage = pageno;
	    this.search.page = pageno;
	    this.userList(this.search);
    }

    sortlist(field){
	    if(this.search.sortfield==field){
		  if(this.sortreverse){
		    this.sortreverse = false;
			this.search.sorttype = 'desc';
		  }
          else { 
            this.sortreverse = true;
            this.search.sorttype = 'asc';			
		  }
	    }
	    else {
	       this.search.sortfield = field;
		   this.sortreverse = true;
		   this.search.sorttype = 'asc';
	    }
	  
	    this.search.page = this.currentPage;
	    this.userList(this.search);
    } 
  
    ngOnInit() {
	    this.userdetail = this.userList("");
    }
}
