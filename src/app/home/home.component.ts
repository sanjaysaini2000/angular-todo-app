import { ActivatedRoute } from "@angular/router";
import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "todo-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  items: AddItemEventArgs[];
  alert: string;

  constructor(private data: DataService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.data.task.subscribe(res => (this.items = res));
    this.data.updateTask(this.items);
    this.onUpdateItem(
      this.route.snapshot.paramMap.get("old"),
      this.route.snapshot.paramMap.get("new")
    );
    console.log("home oniti", this.items);
  }

  onAddItem(eventArgs: AddItemEventArgs) {
    this.items.push(eventArgs);
    console.log("onadd", this.items);

    this.data.updateTask(this.items);
  }

  onUpdateItem(oldValue: string, newValue: string) {
    if (oldValue != null && oldValue !== newValue) {
      this.alert = oldValue + " is updated to " + newValue + " sucessfully...";
    } else if (oldValue != null && oldValue === newValue) {
      this.alert = oldValue + " is not updated...";
    }
  }

  onItemMessage(mgs) {
    this.alert = mgs;
  }
}
