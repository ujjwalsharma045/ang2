import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';

const routes: Routes = [
  { path: 'all', component: TodoComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'contacts', component: ContactlistComponent },
  { path: 'contact/:id', component: ContactdetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DogListComponent,
    ContactlistComponent,
    ContactdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
