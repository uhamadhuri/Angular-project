import { apiService } from './../api.service';
import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';


@Component({
    selector:"app-userEdit",
    templateUrl:"userEdit.component.html",
    styleUrls:["userEdit.component.scss"]
})
export class userEditComponent{
    private id:any;
    constructor(private activatedroute:ActivatedRoute, private service:apiService){
        // var self=this;
        this.activatedroute.params.subscribe(
            (res)=>{
             this.id=res.id;
             console.log(res);
             
              
            }
        )
        this.service.getuserInfo().subscribe(
            res=>{
                this.id=res;
            }
        )
    }
    
}