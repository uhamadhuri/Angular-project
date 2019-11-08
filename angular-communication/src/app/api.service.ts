import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ApiService{
    private id:any;
    constructor (private http:HttpClient){ }
    fetchusers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
   
    
}