import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../classe/Task';


@Injectable({
  providedIn: 'root'
})
export class taskService {
    URL='http://localhost:8088/tasks'

    constructor(private httpClient:HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.URL);
    }

    addTask(task:Task):Observable<Task>{
        return this.httpClient.post<Task>(this.URL,task)
    }

}

