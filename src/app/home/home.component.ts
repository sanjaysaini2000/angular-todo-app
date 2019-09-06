import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input } from "@angular/core";

@Component({
  selector: "todo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  constructor() {}
  items: AddItemEventArgs;

  onAddItem(eventArgs: AddItemEventArgs) {
    this.items = eventArgs;
  }
}
