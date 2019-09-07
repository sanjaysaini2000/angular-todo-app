import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "todo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  items: AddItemEventArgs;
  alert;

  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.data.task.subscribe(res => (this.items = res));
    this.data.updateTask(this.items);
  }

  onAddItem(eventArgs: AddItemEventArgs) {
    this.items = eventArgs;
    this.data.updateTask(this.items);
  }

  onItemMessage(mgs) {
    this.alert = mgs;
  }
}
