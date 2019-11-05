import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class apiService{
    constructor( private http:HttpClient){

    }
    fetchUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
    getuserInfo(id){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
}