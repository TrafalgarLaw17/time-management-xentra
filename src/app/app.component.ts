import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-management-system';
  isLoginPage: boolean = false; 

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const hiddenSidebarRoutes = ['/login', '/time-in-time-out'];
        this.isLoginPage = hiddenSidebarRoutes.some(route =>
          event.urlAfterRedirects.includes(route)
        );
      }
    });
  }
}
