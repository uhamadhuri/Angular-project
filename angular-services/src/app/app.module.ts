import { Component } from '@angular/core';
import { Usereditcomponent } from './useredit/useredit.component';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userviewComponent } from './userview/userview.component';
import { aboutComponent } from './about/about.component';
import { OthersComponent } from './Others/Others.component';
import { UserPipe } from 'src/app/pipes/user.pipe';

const Route:any=[{
  path:'',
  redirectTo:"home",
  pathMatch:"full"

},
{path:"home", component:homeComponent},
{path:"services",component:servicesComponent},
{path:"userEdit/:id",component:Usereditcomponent},
{path:"userview",component:userviewComponent},
{path:"About",component:aboutComponent},
{path:"Others",component:OthersComponent}

]
@NgModule({
  declarations: [
    AppComponent,headerComponent,
    navbarComponent,homeComponent,
    servicesComponent,
    Usereditcomponent,userviewComponent,
    aboutComponent,
    OthersComponent,
    UserPipe
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Route,{useHash:true})
  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
