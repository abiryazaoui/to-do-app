import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskStatus } from 'src/app/classe/Enum/TaskStatus.enum';
import { Task } from 'src/app/classe/Task';
import { taskService } from 'src/app/service/Task.service';

@Component({
  selector: 'app-kanban-dashboard',
  templateUrl: './kanban-dashboard.component.html',
  styleUrls: ['./kanban-dashboard.component.css']
})
export class KanbanDashboardComponent implements OnInit{

  constructor(private taskService: taskService, private router: Router ){}

  TaskStatus = TaskStatus;

  tasks!: Task[]

  todolist!:Task[]
  inProgressList!:Task[]
  doneList!:Task[]

  currentTask!:Task;




  ngOnInit(): void {
    this.loadTasks();
  }
  

  loadTasks(){
    this.taskService.getTasks().subscribe({
      next: (tasks: Task[]) => {
        this.todolist = tasks.filter(task => task.status === TaskStatus.todo);
        this.inProgressList = tasks.filter(task => task.status === TaskStatus.inprogress);
        this.doneList = tasks.filter(task => task.status === TaskStatus.done);
      },
      error: (err) => {
        console.error('Error fetching tasks:', err); 
      }
    });
  }
  

  onDragStart(task: Task) {
    this.currentTask = task;
    console.log('Dragging task: ', task);  
  }

  onDrop(event: DragEvent, status: TaskStatus) {
    event.preventDefault();

    let droppedTask = this.tasks.find(t => t.id === this.currentTask!.id); 
    if (droppedTask) {
      droppedTask.status = status;
      console.log(`kbal edit task`);

      this.taskService.editTask(droppedTask).subscribe({
        next: () => {
          this.loadTasks();
          console.log('Task dropped');

        },
        error: (err: HttpErrorResponse) => { 
          console.error('Error updating task: ', err.message);
        }
      });
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  navigateToFormTask(): void {
    this.router.navigate(['/taskForm']);
  }
}
