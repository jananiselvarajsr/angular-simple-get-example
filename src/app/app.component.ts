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
  auth: String;
  value;
  title;
  completed;

  constructor(private appService: AppService) {}

  sendGetRequest(userId) {
    this.appService.getAll().subscribe((data: any) => {
      console.log(data);
      this.auth = data.ReservationResponse.Identifier.authority;
      this.value = data.ReservationResponse.Identifier.value;
      console.log(this.auth);
      console.log(this.value);
      this.completed = "completed";
      this.title = "InitiateWorkbench";
    });
  }
}
