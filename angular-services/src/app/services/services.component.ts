import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector:"app-services",
    templateUrl: "services.component.html",
    styleUrls: ["services.component.scss"]
})
export class servicesComponent{
    private name:any;
    private value:any;
    namechange(event){
     
   this.value=event.target.value;
   this.name=this.value;
    }
    @Input()
    public trial:any;
   @Output()
   public data:EventEmitter <any>=new EventEmitter<any>()
   @Output()
   public data1:EventEmitter <any>=new EventEmitter<any>()
   gotorename(){
       this.data.emit()
   }
   
   gotoreset(){
     this.data1.emit()
   }
}