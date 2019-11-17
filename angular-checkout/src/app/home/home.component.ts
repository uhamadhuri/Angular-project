import { Component } from "@angular/core";

@Component({
    selector:"app-home",
    templateUrl:"home.component.html",
    styleUrls:["home.component.scss"]
})
export class HomeComponent{
    
    public firstname:any;
    Lastname:any;
    Username:any;
    emailaddress:any;
    Addressdetails:any;
    address2:any;
    country:any;
    state:any;
    zip:any;
    checklist:any;
    checklist2:any;
    card:any;
    cardname:any;
    CreditCardnumber:any;
    Expiration:any;
    CVV:any;
    data:any;
    checkout(){
        var data={
            firstname: this.firstname,
            Lastname:this.Lastname,
            Username:this.Username,
            emailaddress:this.emailaddress,
            Addressdetails:this.Addressdetails,
            address2:this.address2,
            country:this.country,
            state:this.state,
            zip:this.zip,
            checklist:this.checklist,
            checklist2:this.checklist2,
            card:this.card,
            cardname:this.cardname,
            CreditCardnumber:this.CreditCardnumber,
            Expiration:this.Expiration,
            CVV:this.CVV

           

        }
        console.log(data);
    }
}