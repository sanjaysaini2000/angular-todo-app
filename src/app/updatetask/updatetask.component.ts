import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { routerNgProbeToken } from "@angular/router/src/router_module";

@Component({
  selector: "app-updatetask",
  templateUrl: "./updatetask.component.html",
  styleUrls: ["./updatetask.component.css"]
})
export class UpdatetaskComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
 itemId: string;
  ngOnInit() {
   this.itemId= this.route.snapshot.paramMap.get("id");
  }

  onUpdate() {
    this.router.navigate([""]);
  }
}
