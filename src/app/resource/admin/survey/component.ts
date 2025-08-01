import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../component/sidebar/component';

@Component({
  selector: 'app-Survey',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class SurveyComponent {}
