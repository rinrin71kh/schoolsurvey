import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class ProfileComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/admin/dashboard']);
  }
}
