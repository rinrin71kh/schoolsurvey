import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule,MatIconModule],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class SidebarComponent {}
