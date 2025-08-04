import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- import Router
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './template.html',
  imports : [
    MatIconModule,
    CommonModule
  ],
  styleUrls: ['./style.css']
})
export class HeaderComponent {
  isDarkMode = false;
  userMenuOpen = false;
  constructor(private router: Router) {} // <-- inject Router

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  viewProfile(): void {
    this.router.navigate(['/admin/profile']); // Adjust if you have a different route
  }
  logout(): void {
    // Navigate to login
    this.router.navigate(['/login']);
  }
}
