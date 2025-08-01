import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- import Router

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class HeaderComponent {
  isDarkMode = false;

  constructor(private router: Router) {} // <-- inject Router

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }

  logout(): void {
    // Navigate to login
    this.router.navigate(['/login']);
  }
}
