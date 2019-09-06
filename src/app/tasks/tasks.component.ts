import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input } from "@angular/core";

@Component({
  selector: "todo-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent {
  @Input("tasks") tasks: AddItemEventArgs;
}
