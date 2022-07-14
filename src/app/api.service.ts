import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewcourse=()=>{
    return this.http.get("https://mylinkurcodesapp.herokuapp.com/getcourses")
  }
}
