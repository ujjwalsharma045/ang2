import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';
import { PageService} from '../services/page.service';

@Component({
  selector: 'app-pageedit',
  templateUrl: './pageedit.component.html',
  styleUrls: ['./pageedit.component.css'],
  providers:[PageService]
})
export class PageeditComponent implements OnInit {
    
	pageForm:FormGroup;
	private pageid;
    private submitted = false;	
	private sectionTitle = 'Edit Page';
    constructor(private pageService:PageService, private route: ActivatedRoute, private router: Router, private formBuiling: FormBuilder) { 
	    this.pageForm = formBuiling.group({
			'title':[null , Validators.required],
			'content':[null, Validators.required],
			'status':[null, Validators.required]
		});
	}

    ngOnInit() {
		this.route.params.subscribe(params => {
           this.pageid = params['id'];
        });
		this.sectionTitle = this.sectionTitle+' '+this.pageid;
		this.pageService.view(this.pageid).subscribe(result => {
			    console.log(result);
			    if(result.success=="1"){
				   this.pageForm.patchValue(result.records[0]);
			    }
		});
    }

    editPage(){
	    this.submitted =true;
	    if(this.pageForm.valid){
		    this.pageService.edit(this.pageForm.value, this.pageid).subscribe(result => {
			    console.log(result);
			    if(result.success=="1"){
				   this.router.navigate(['./users']);	  
			    }
		    });	  	  
        }
    } 
}
