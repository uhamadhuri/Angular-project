import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularcard-project';


  ngOnInit(){
    var that=this
    $.ajax({
      url:"https://jsonplaceholder.typicode.com/users",
      method:"GET",
      success:function(res){
           console.log(res)
         that.users=res;  
          
      }
  })
}
}