import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { navbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { usersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { testComponent } from './test/test.component';

const App=[
  {path:'',
  pathMatch:"full",
  redirectTo:"users"
},
{path:"users",component:usersComponent}
]
@NgModule({
  declarations: [
    AppComponent,
     HeaderComponent,navbarComponent,usersComponent,
     testComponent

  ],
  imports: [
    BrowserModule,CommonModule,
    HttpClientModule,
    RouterModule.forRoot(App,{useHash:true})
   

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
