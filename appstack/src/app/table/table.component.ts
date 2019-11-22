import { Component } from "@angular/core";
import { apiService } from 'src/app/services/api.service';

@Component({
    selector: "app-table",
    templateUrl: "table.component.html",
    styleUrls: ["table.component.scss"]
})
export class Tablecomponent{
    users: Object;
    users1: any;
    users2:any;
    constructor(private service:apiService){
        
        this.getUsers();
        this.getUsers1();
        this.getUsers2();
    }
    getUsers(){
        this.service.fetchUsers().subscribe(
            res=>{
                this.users=res;
            }
        )    
    }
    getUsers1(){
        this.service.fetchusers1().subscribe(
            res=>{
                this.users1=res;
            }
        )    
    }
    getUsers2(){
        this.service.fetchusers2().subscribe(
            res=>{
                this.users2=res;
            }
        )    
    }
}