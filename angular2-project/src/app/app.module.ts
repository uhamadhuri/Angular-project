import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { usersComponent } from './users/users.component';
import { Router, RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';
import { serversComponent } from './servers/servers.component';

const APP:any=[
  { path:"",
redirectTo:"users",
pathMatch:"full"},
{path:"users",component:usersComponent},
{path:"servers/:id",component:serversComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    usersComponent,serversComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
