import { Component } from "@angular/core";

@Component({
    selector: "app-about",
    templateUrl: "about.component.html",
    styleUrls: ["about.component.scss"]

})
export class aboutComponent{
    public firstname="uha";
    public firstname1="uhamadhuri";
    public email="uhamadhuri@gmail.com";
   

    gotoSave(){
        var kind=[{
            "firstname":this.firstname,
            "firstname1":this.firstname1,
            "email":this.email,
            
        }]
        console.log(kind)
    }
    gotoCancel(){
        this.firstname="";
        this.firstname1="";
        this.email="";
       
    }

}