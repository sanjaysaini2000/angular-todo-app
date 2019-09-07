import { AddItemEventArgs } from "./../navbar/navbar.component";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "todo-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent {
  @Input("tasks") tasks: AddItemEventArgs[];
  @Output("deleteItemMessage") deleteItemMessage = new EventEmitter();
  @Output("itemStatusChangeMessage")
  itemStatusChangeMessage = new EventEmitter();

  todo: AddItemEventArgs;

  isCrossed = false;
  index;
  onStatuChange(task) {
    this.isCrossed = !this.isCrossed;
    this.todo = task;
    this.todo.isComplete = this.isCrossed;
    this.tasks[this.tasks.indexOf(task)] = this.todo;
    let msg = this.isCrossed
      ? this.todo.name + " is completed successfully..."
      : this.todo.name + " is not completed yet...";
    this.itemStatusChangeMessage.emit(msg);
  }
  onDelete(task) {
    this.index = this.tasks.indexOf(task);
    this.tasks.splice(this.index, 1);
    this.deleteItemMessage.emit(task.name + " is deleted successfully...");
  }
}
