import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactlistService } from '../contactlist.service';
@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css'],
  providers: [ContactlistService]
})

export class ContactdetailComponent implements OnInit {
  private contact;
  constructor(private contactlistService: ContactlistService, private route: ActivatedRoute) { }
  ngOnInit(){
    this.contact = this.contactlistService.getContact(1);
  }
}
