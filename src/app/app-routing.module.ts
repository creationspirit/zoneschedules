import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoneOverviewComponent } from './components/zone-overview/zone-overview.component';
import { ScheduleEditComponent } from './components/schedule-edit/schedule-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: ZoneOverviewComponent },
  { path: 'edit/new', component: ScheduleEditComponent },
  { path: 'edit/:id', component: ScheduleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
