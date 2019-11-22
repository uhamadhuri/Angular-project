import { LoginGuard } from './../login/login.guard';
import { HomeComponent } from './../Home/home.component';
import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
const App:any=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'Home',
    component:HomeComponent,
    CanActivate:[LoginGuard]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(App,{useHash:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
