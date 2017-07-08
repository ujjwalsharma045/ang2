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
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SettingComponent } from './setting/setting.component';
import { PagesComponent } from './pages/pages.component';
import { PageaddComponent } from './pages/pageadd.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { PageeditComponent } from './pages/pageedit.component';
import { PageviewComponent } from './pages/pageview.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

const routes: Routes = [
  { path:'', component: UsersComponent },  
  { path:'users', component: UsersComponent },
  { path:'users/view/:id', component: UserviewComponent },
  { path:'users/edit/:id', component: UsereditComponent },
  { path:'users/add', component: UseraddComponent },
  { path:'login', component: LoginComponent },
  { path:'setting', component: SettingComponent },
  { path:'page/add', component: PageaddComponent },
  { path:'page/edit/:id', component: PageeditComponent },
  { path:'page/view/:id', component: PageviewComponent },
  { path:'pages', component: PagesComponent },
  { path:'pages/index', component: PagesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserviewComponent,
    UsereditComponent,
    UseraddComponent,
    ControlmessageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SettingComponent,
    PagesComponent,
    PageaddComponent,
    PageeditComponent,
    PageviewComponent,
  ],
  imports: [
    BrowserModule,
	ReactiveFormsModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(routes),
	CKEditorModule,
	Ng2DatetimePickerModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
