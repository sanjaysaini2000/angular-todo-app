import { Component, Input } from "@angular/core";

@Component({
  selector: "todo-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent {
  @Input("message") message: string;
}
