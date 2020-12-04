import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  protected url: string = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>  {
    console.log("here")
    const data=this.http.get(this.url);
    return data;
  }
}
