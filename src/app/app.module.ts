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
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './users/userview.component';
import { UsereditComponent } from './users/useredit.component';
import { UseraddComponent } from './users/useradd.component';

const routes: Routes = [
  { path:'all', component: TodoComponent },
  { path:'dogs', component: DogListComponent },
  { path:'contacts', component: ContactlistComponent },
  { path:'contact/:id', component: ContactdetailComponent },
  { path:'users', component: UsersComponent },
  { path:'users/view/:id', component: UserviewComponent },
  { path:'users/edit/:id', component: UsereditComponent },
  { path:'users/add', component: UseraddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DogListComponent,
    ContactlistComponent,
    ContactdetailComponent,
    UsersComponent,
    UserviewComponent,
    UsereditComponent,
    UseraddComponent
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
