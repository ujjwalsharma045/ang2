import { Injectable } from '@angular/core';

let todos = [
  { title: 'Install Angular CLI', isDone: false },
  { title: 'Style app', isDone: false },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable()
export class TodoService {
  	
  constructor(){ };  
  
  get(){
      return new Promise(resolve => resolve(todos));
  }
  
  add(data){
	  return new Promise(resolve => {
			todos.push(data);
			resolve(data);
	  });
  }
  
  put(data) {
	  return new Promise(resolve => {
		  let index = todos.findIndex(todo =>data._id);
		  todos[index].title = data.title;
		  resolve(data);
	  });
  }
  
  delete(id) {
	  return new Promise(resolve => {
		  let index = todos.findIndex(todo =>id);
		  todos.splice(index, 1);
		  resolve(true);
	  });
  }
};
