import { Component } from "@angular/core";

@Component({
    selector: "app-userview",
    templateUrl: "userview.component.html",
    styleUrls: ["userview.component.scss"]
})
export class userviewComponent{
    public name1:any;
    public username:any;
    public email:any;
    public phone:any;
    public website:any;
    handlechange1(event){
        this.name1=event.target.value;
        console.log(this.name1)
     
   }
   handlechange2(event){
    this.username=event.target.value
    
}
handlechange3(event){
    this.email=event.target.value;
}
handlechange4(event){
    this.phone=event.target.value;
}
handlechange(event){
  this.website=event.target.value;
}
getdata(){
    var obj=[{
        "name":this.name1,
        "username":this.username,
        "email":this.email,
        "phone":this.phone,
        "website":this.website
    }]
    console.log(obj)
}

}