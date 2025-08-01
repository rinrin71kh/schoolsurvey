
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class HeaderComponent {
  isDarkMode = false;

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const root = document.documentElement;
    root.classList.toggle('dark', this.isDarkMode);
  }

  logout(): void {
    // TODO: implement real logout
    console.log('Logging out...');
  }
}
