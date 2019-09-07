import { Component, Output, EventEmitter } from "@angular/core";

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
export class NavbarComponent {
  items: AddItemEventArgs[] = [];
  @Output("addItem") addItem = new EventEmitter();
  @Output("addItemMessage") addItemMessage = new EventEmitter();

  onAddItem(item) {
    if (item.value !== "") {
      this.items.push({
        id: Date.now(),
        name: item.value,
        isComplete: false
      });
      this.addItem.emit(this.items);
      this.addItemMessage.emit(item.value + " is added successfully...");
      item.value = "";
    }
  }
}
