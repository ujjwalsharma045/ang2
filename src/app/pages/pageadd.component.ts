import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PageService} from '../services/page.service';
import { FormBuilder, Validators,FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-pageadd',
  templateUrl: './pageadd.component.html',
  styleUrls: ['./pageadd.component.css'],
  providers:[PageService]
})
export class PageaddComponent implements OnInit {
    pageForm:FormGroup
    constructor(private page_service:PageService, private route: ActivatedRoute, private router: Router,  private formBuilding: FormBuilder) { 
        this.pageForm = formBuilding.group({
		    'title':[null , [Validators.required, Validators.minLength(5)]],
			'content':["" , Validators.required],
			'status':[null , Validators.required]
	    });  
    }
  
    private submitted = false;
    ngOnInit() {
	    
    }

    pageAdd(){
	    this.submitted = true;
	    if(this.pageForm.valid){
		    this.page_service.add(this.pageForm.value).subscribe(result => {
				  //console.log(result);
				  if(result.success=="1"){
					 this.router.navigate(['./pages']);	  
				  }
			});   
	    }
    } 
}
