import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './users/userview.component';
import { UsereditComponent } from './users/useredit.component';
import { UseraddComponent } from './users/useradd.component';
import { ControlmessageComponent } from './controlmessage/controlmessage.component';

const routes: Routes = [
  { path:'', component: UsersComponent },  
  { path:'users', component: UsersComponent },
  { path:'users/view/:id', component: UserviewComponent },
  { path:'users/edit/:id', component: UsereditComponent },
  { path:'users/add', component: UseraddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserviewComponent,
    UsereditComponent,
    UseraddComponent,
    ControlmessageComponent,
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
