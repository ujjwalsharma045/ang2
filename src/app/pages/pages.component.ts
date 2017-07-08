import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PageService } from '../services/page.service';
import { PagerService } from '../services/pager.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers:[PageService , PagerService]
})
export class PagesComponent implements OnInit {

    private  pageslist = [];
    constructor(private pageService:PageService, private route: ActivatedRoute, private router: Router, private pagerService: PagerService) { 
  
    } 
	
	pageList(data){
		if(data==""){
			this.pageService.getPages(data).subscribe(result => {
			   this.pageslist = result.records;			   
		    });
		}
		else {
			this.pageService.getPages(data).subscribe(result => {
			   this.pageslist = result.records;			   
		    });
		}
	}
	
	deletePage(pageid){
		this.pageService.remove(pageid).subscribe(result => {
		    if(result.success=="1"){
			  location.reload();
		    }		   
	    });
	}

    ngOnInit() {
		this.pageList("");
    }
}
