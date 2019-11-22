import { Component } from "@angular/core";
import { apiService } from 'src/app/services/api.service';

@Component({
    selector: "app-layout",
    templateUrl: "layout.component.html",
    styleUrls: ["layout.component.scss"]
})
export class Layoutcomponent{
    users: Object;
    constructor(private service:apiService){
        
        this.getUsers();
    }
    getUsers(){
        this.service.fetchUsers().subscribe(
            res=>{
                this.users=res;
            }
        )    
    }
}
