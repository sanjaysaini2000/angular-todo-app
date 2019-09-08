import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UpdatetaskComponent } from "./updatetask/updatetask.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "task/:id", component: UpdatetaskComponent },
  { path: ":old/:new", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
