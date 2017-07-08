import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PageService} from '../services/page.service';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css'],
  providers:[PageService]
})
export class PageviewComponent implements OnInit {
    private pageid;
	private pageDetail = {}
    constructor(private pageService:PageService, private route:ActivatedRoute, private router:Router) { 
  
    }

    ngOnInit() {
		this.route.params.subscribe(params => {
           this.pageid = params['id'];
        });
		
		this.pageService.view(this.pageid).subscribe(result => {
			console.log(result);
			this.pageDetail = result.records[0];			   
		});
    }    
}
