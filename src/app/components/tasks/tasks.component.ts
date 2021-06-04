import { Component, OnInit } from '@angular/core';
import{Task} from '../../Task';
//import {TASKS} from '../../mock-task';
import{ TaskService } from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {  
  tasks:any;  
  constructor(private service:TaskService) { }

  ngOnInit(): void {
    this.service.getTasks().subscribe((tasks)=>{this.tasks=tasks;});
  }

  DeleteTask(task:Task)
  {
    this.service.DeleteTask(task).subscribe(
      ()=>(this.tasks = this.tasks.filter((t:Task) => t.id !== task.id)));
  }

  TaggleReminder(task:Task){
    task.reminder=!task.reminder;
    this.service.UpdateTaskReminder(task).subscribe();
  }

  AddTask(task:Task){    
    this.service.AddTask(task).subscribe((task:Task)=> (this.tasks.push(task)));
  }
}
