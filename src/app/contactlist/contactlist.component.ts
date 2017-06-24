import { Component, OnInit } from '@angular/core';
import { ContactlistService } from '../contactlist.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
  providers: [ContactlistService]
})

export class ContactlistComponent implements OnInit {

  contacts: Contact[];
  
  constructor(private contactlistService: ContactlistService){ }
  
  ngOnInit(){
	 this.contacts = this.contactlistService.getContacts();
  }
}
