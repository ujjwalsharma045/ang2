import { Injectable } from '@angular/core';

@Injectable()
export class ContactlistService {
  constructor() { }
  
  contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3 }
  ];
  
  getContacts() {
      return this.contacts;  
  }
  
  getContact(id) {
      return this.contacts.find(contact => contact.id == id);
  }
}
