import { Component, OnInit } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Observable } from 'rxjs/Observable';
//import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css'],
  providers: [PetService]
})

export class DogListComponent implements OnInit {
  
  // Private property for binding
  private dogs; 

  constructor(private petService: PetService)  {}

  // Load data ones componet is ready
  ngOnInit() {    
    this.dogs = this.petService.findPets('dog');
  }
}
