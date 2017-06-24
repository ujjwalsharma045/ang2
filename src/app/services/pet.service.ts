import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class PetService {

  constructor(private jsonp: Jsonp){ }
  
  private petsUrl = 'http://api.petfinder.com/';
  
  findPets(animal:string){

		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
		const endPoint = 'pet.find'
          
		// URLSearchParams makes it easier to set query parameters and construct URL
		// rather than manually concatenating
		let params = new URLSearchParams();
		params.set('key', '3a62ece31719a64dcf6726980917d7ad');
		params.set('location', 'texas');
		params.set('animal', animal);
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');
       
		// Return response
		return this.jsonp.get(this.petsUrl + endPoint, { search: params }).map(response => <string[]> response.json().petfinder.pets.pet);
	
  }
  
  findPetById(id: string) {
		// End point for list of pets:
		// http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
		const endPoint = 'pet.get'

		// URLSearchParams makes it easier to set query parameters and construct URL
		// rather than manually concatinating
		let params = new URLSearchParams();
		params.set('key', '[API_KEY]');
		params.set('id', id);
		params.set('format', 'json');
		params.set('callback', 'JSONP_CALLBACK');

		// Return response
		return this.jsonp.get(this.petsUrl + endPoint, { search: params }).map(response => <string[]> response.json().petfinder.pet);
  }
}
