import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TimeInTimeOutComponent } from './components/time-in-time-out/time-in-time-out.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogsComponent } from './components/logs/logs.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { AddModuleComponent } from './components/add-module/add-module.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CalendarComponent } from './components/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'time-in-time-out', component: TimeInTimeOutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'logs', component: LogsComponent},
  { path: 'progress-tracker', component: ProgressTrackerComponent},
  { path: 'add-module', component: AddModuleComponent},
  { path: 'chats', component: ChatsComponent},
  { path: 'calendar', component: CalendarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
