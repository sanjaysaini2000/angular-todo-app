import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input } from "@angular/core";

@Component({
  selector: "todo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  items: AddItemEventArgs;
  alert;

  onAddItem(eventArgs: AddItemEventArgs) {
    this.items = eventArgs;
    //this.alert = "added";
  }

  onItemMessage(mgs) {
    this.alert = mgs;
  }
}
