import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskStatus } from 'src/app/classe/Enum/TaskStatus.enum';
import { Task } from 'src/app/classe/Task';
import { taskService } from 'src/app/service/Task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task!: Task;
  taskForm!: FormGroup;
  taskStatuses = Object.values(TaskStatus);

  constructor(
    private fb: FormBuilder,
    private taskService: taskService, 
    private router: Router

  ) {}

  ngOnInit(): void {
      this.createEmptyForm();
  }

  private createEmptyForm(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: [TaskStatus.todo, Validators.required],
      deadline: [[Validators.required, Validators.min(1)]],
      isDesactivated:[false]
    });
  }



  onSubmit(): void {
    this.taskService.addTask(this.taskForm.value).subscribe(() => {
      this.router.navigate(['']);

    });
  }

  navigateToTasks(): void {
    this.router.navigate(['']);
  }
}




