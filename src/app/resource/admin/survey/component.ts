import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-Survey',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class SurveyComponent {
  surveys = [
    { id: 1, name: 'Student Satisfaction Survey' },
    { id: 2, name: 'Course Feedback Survey' },
    { id: 3, name: 'Staff Evaluation Survey' }
  ];
}
