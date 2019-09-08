import { Component, Output, EventEmitter, OnInit } from "@angular/core";

export interface AddItemEventArgs {
  id: number;
  name: string;
  isComplete: boolean;
}

@Component({
  selector: "todo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    console.log("nav oninit...");
  }
  item: AddItemEventArgs;
  @Output("addItem") addItem = new EventEmitter();
  @Output("addItemMessage") addItemMessage = new EventEmitter();

  onAddItem(itemvalue) {
    if (itemvalue.value !== "") {
      this.item = { id: Date.now(), name: itemvalue.value, isComplete: false };
      this.addItem.emit(this.item);
      this.addItemMessage.emit(itemvalue.value + " is added successfully...");
      itemvalue.value = "";
    }
  }
}
