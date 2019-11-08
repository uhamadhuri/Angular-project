import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { ApiService } from './../api.service';
@Component({
    selector:"users-main",
    templateUrl:"users.component.html",
    styleUrls:["users.component.scss"]
})
export class usersComponent{
    public users:any;
    constructor(private Route:Router,private service:ApiService){
       
       
            // this.getUsers();
        }
        getusers(){
            this.service.fetchusers().subscribe(
                res=>{
                    this.users=res;
                }
            )
        }
    }
