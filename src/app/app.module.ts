import { DataService } from "./data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TasksComponent } from "./tasks/tasks.component";
import { MessageComponent } from "./message/message.component";
import { UpdatetaskComponent } from "./updatetask/updatetask.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TasksComponent,
    MessageComponent,
    UpdatetaskComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
