import { Injectable } from '@angular/core';
import { Observable }from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import{Task} from '../Task';

const httpOptions={
  headers:new HttpHeaders ({
    'Content-Type':'application/json',
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL:string="http://localhost:5000/tasks";
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    //const tasks = of(TASKS);
    //return tasks;
   return this.http.get<Task[]>(this.URL);
  }

  DeleteTask(task:Task):Observable<Task> {
      const urls = `${this.URL}/${task.id}`;
      return  this.http.delete<Task>(urls);
  }

  UpdateTaskReminder(task:Task):Observable<Task> {
    const urls = `${this.URL}/${task.id}`;
    return  this.http.put<Task>(urls,task,httpOptions);
}

AddTask(atask:Task):Observable<Task> {
  return this.http.post<Task>(this.URL,atask,httpOptions);
}

}
