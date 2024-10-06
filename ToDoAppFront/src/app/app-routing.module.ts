import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanDashboardComponent } from './components/kanban-dashboard/kanban-dashboard.component';

const routes: Routes = [
  {path:"", title: "To Do App", component: KanbanDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //
}
