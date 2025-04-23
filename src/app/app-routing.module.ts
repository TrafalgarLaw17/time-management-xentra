import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TimeInTimeOutComponent } from './components/time-in-time-out/time-in-time-out.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'time-in-time-out', component: TimeInTimeOutComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
