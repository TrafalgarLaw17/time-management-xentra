import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-mentor',
  templateUrl: './sidebar-mentor.component.html',
  styleUrls: ['./sidebar-mentor.component.css']
})
export class SidebarMentorComponent  {
  isCollapsed: boolean = false;
  constructor(private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); 
  }

  logout(): void {
    localStorage.removeItem('user'); 
    this.router.navigate(['/login']);
  }
}
