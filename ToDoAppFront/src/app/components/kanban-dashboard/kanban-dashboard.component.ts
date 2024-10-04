import { Component, OnInit } from '@angular/core';
import { TaskStatus } from 'src/app/classe/Enum/TaskStatus.enum';
import { Task } from 'src/app/classe/Task';
import { taskService } from 'src/app/service/Task.service';

@Component({
  selector: 'app-kanban-dashboard',
  templateUrl: './kanban-dashboard.component.html',
  styleUrls: ['./kanban-dashboard.component.css']
})
export class KanbanDashboardComponent implements OnInit{

  constructor(private taskService: taskService){}
  
  TaskStatus = TaskStatus;

  tasks!: Task[]

  todolist!:Task[]
  inProgressList!:Task[]
  doneList!:Task[]

  draggedTask!:Task | null

  ngOnInit(): void {
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
    console.log('Dragging task: ', task);  
  }

  onDrop(event: DragEvent, status: TaskStatus) {
    event.preventDefault();
    if (this.draggedTask) {
      this.draggedTask.status = status;


      this.draggedTask = null; 
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}
