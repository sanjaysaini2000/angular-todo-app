import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class DataService {
  private tasks = new BehaviorSubject<any>([]);
  task = this.tasks.asObservable();

  updateTask(task) {
    this.tasks.next(task);
  }
}
