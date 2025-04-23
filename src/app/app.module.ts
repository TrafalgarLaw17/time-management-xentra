import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TimeInTimeOutComponent } from './components/time-in-time-out/time-in-time-out.component';
import { SidebarMentorComponent } from './components/sidebar-mentor/sidebar-mentor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogsComponent } from './components/logs/logs.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { AddModuleComponent } from './components/add-module/add-module.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeInTimeOutComponent,
    SidebarMentorComponent,
    DashboardComponent,
    LogsComponent,
    ProgressTrackerComponent,
    AddModuleComponent,
    ChatsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
