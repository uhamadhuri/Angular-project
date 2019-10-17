import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'interpolation-project';
 // private b:any= ["uha","divya","shanti","lolli"];
  // a=100;
   



   ngOnInit(){
     
    var that=this;
     $.ajax({
      url:"https://jsonplaceholder.typicode.com/users",
      method:"GET",
      success:function(res){
           //console.log(res)
           
           that.users=res;

          
           
        
           
          
      }
      
   
      
     });
    
   }
}


