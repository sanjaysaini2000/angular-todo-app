import { DataService } from "./../data.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AddItemEventArgs } from "../navbar/navbar.component";

@Component({
  selector: "app-updatetask",
  templateUrl: "./updatetask.component.html",
  styleUrls: ["./updatetask.component.css"]
})
export class UpdatetaskComponent implements OnInit {
  itemId: string;
  tasks: AddItemEventArgs[];
  itemName: string;
  oldItemName: string;
  todo: AddItemEventArgs;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) {}
  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get("id");
    this.data.task.subscribe(res => (this.tasks = res));
    this.todo = this.tasks.find(t => t.id.toString() === this.itemId);
    this.itemName = this.todo.name;
    this.oldItemName = this.todo.name;
  }

  onUpdate() {
    this.index = this.tasks.indexOf(this.todo);
    this.todo.name = this.itemName;
    this.tasks[this.index] = this.todo;
    this.data.updateTask(this.tasks);
    this.router.navigate(["", this.oldItemName, this.todo.name]);
  }
}
