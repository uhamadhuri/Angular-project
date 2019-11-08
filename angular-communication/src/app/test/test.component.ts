import { ApiService } from './../api.service';
import { Component, Input } from "@angular/core";

@Component({
    selector:"test-main",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"]
})
export class testComponent{
   @Input()
   public test;
}