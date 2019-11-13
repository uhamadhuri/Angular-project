import { Router } from '@angular/router';
import { apiService } from './../api.service';
import { Component } from "@angular/core";



@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.scss"]
})
export class homeComponent{
    public users:any;
   
    id;
  
    constructor(private service:apiService, private router:Router){
        
        this.getUsers();
    }
    getUsers(){
        this.service.fetchUsers().subscribe(
            (res)=>{
                this.service.userdata=res;
                this.users=res;
            }
        )
    }
    gotoEdit(data){
        this.router.navigate(["userEdit",data.id]);
        
    }
    changeevent(event){
        var searchkey=event.target.value;
        if(searchkey){
            this.users=this.users.filter(res=>{
                var name=res.name.toLowerCase();
                return name.indexOf(searchkey)!==-1
            });
           
            }
            else
                
                {
                    this.users=this.service.userdata;
                }
            
        }
    }

    

   