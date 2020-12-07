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
  auth: String; //authorization
  value; //amount
  title: any; //travelerRef
  completed; //Ticket number

  constructor(private appService: AppService) {}

  sendGetRequest(userId) {
    this.appService.getAll().subscribe((data: any) => {
      console.log(data);
      this.auth = data.ReservationResponse.Identifier.authority;
      this.value =
        data.ReservationResponse.Reservation.Receipt[2].Document[0].Amount.Total;
      console.log(this.auth);
      console.log(this.value);
      this.completed =
        data.ReservationResponse.Reservation.Receipt[2].Document[0].Number;
      this.title =
        data.ReservationResponse.Reservation.Receipt[2].Document[0].TravelerRef;
    });
  }
}
