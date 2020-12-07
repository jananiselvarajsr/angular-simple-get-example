import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppService } from "./app.service";

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

  constructor(private appService: AppService) {}

  sendGetRequest(userId) {
    this.appService.getAll().subscribe((data: any) => {
      console.log(data);
      this.userId = data.userId;
      this.id = data.id;
      this.completed = data.completed;
      this.title = data.title;
    });
  }
}
