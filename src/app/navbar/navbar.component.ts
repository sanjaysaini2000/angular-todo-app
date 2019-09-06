import { Component, Output, EventEmitter } from "@angular/core";

export interface AddItemEventArgs {
  item: string[];
}

@Component({
  selector: "todo-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  items = [];
  @Output("addItem") addItem = new EventEmitter();

  onAddItem(item) {
    this.items.push(item.value);
    this.addItem.emit(this.items);
    item.value = "";
  }
}
