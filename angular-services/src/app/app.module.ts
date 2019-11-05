import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { navbarComponent } from './navbar/navbar.component';
import { homeComponent } from './home/home.component';
import { servicesComponent } from './services/services.component';
import { RouterModule } from "@angular/router";
import { apiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { userEditComponent } from './userEdit/userEdit.component';
const Route:any=[{
  path:'',
  redirectTo:"home",
  pathMatch:"full"

},
{path:"home", component:homeComponent},
{path:"services",component:servicesComponent},
{path:"userEdit/:id",component:userEditComponent}
]
@NgModule({
  declarations: [
    AppComponent,headerComponent,
    navbarComponent,homeComponent,
    servicesComponent,
    userEditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(Route,{useHash:true})
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
