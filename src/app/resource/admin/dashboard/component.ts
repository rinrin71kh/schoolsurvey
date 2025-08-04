import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class DashboardComponent {}
