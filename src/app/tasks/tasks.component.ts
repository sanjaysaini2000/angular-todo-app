import { DataService } from "./../data.service";
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
  index;

  constructor(private data: DataService) {}

  onStatuChange(task) {
    this.todo = task;
    this.todo.isComplete = !this.todo.isComplete;
    this.tasks[this.tasks.indexOf(task)] = this.todo;
    this.data.updateTask(this.tasks);

    let msg = this.todo.isComplete
      ? this.todo.name + " is completed successfully..."
      : this.todo.name + " is not completed yet...";
    this.itemStatusChangeMessage.emit(msg);
  }
  onDelete(task) {
    this.index = this.tasks.indexOf(task);
    this.tasks.splice(this.index, 1);
    this.data.updateTask(this.tasks);
    this.deleteItemMessage.emit(task.name + " is deleted successfully...");
  }
}
