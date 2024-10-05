import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanDashboardComponent } from './components/kanban-dashboard/kanban-dashboard.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

const routes: Routes = [
  {path:"", component: KanbanDashboardComponent},
  {path:"taskForm",  component: TaskFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
