import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
//import{} from '../../Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  showAddTask: boolean = false;
  subscription: Subscription;

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<any> = new EventEmitter();
  constructor(private uiService: UiService) {

    this.subscription = this.uiService.onToggle().subscribe((val) => {
      this.showAddTask = val;
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text && !this.day) {
      alert('Please add a task.');
      return;
    }
    const ntask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(ntask);

    this.text = "";
    this.day = "";
    this.reminder = false;

  }
}
