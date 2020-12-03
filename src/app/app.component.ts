import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Janani ";

  userId;
  id;
  title;
  completed;

  constructor(private http: HttpClient) {}

  sendGetRequest(userId) {
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe(data => {
        this.userId = data.userId;
        this.id = data.id;
        this.completed = data.completed;
        this.title = data.title;
      });
  }
}
