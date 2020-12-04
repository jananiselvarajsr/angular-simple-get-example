import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  protected url: string = '"https://jsonplaceholder.typicode.com/todos/1"';

  constructor(private http: HttpClient) {}

  getAll(): any[] {
    return this.http.get(this.url);
  }
}
