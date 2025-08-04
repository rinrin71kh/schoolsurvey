import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../component/sidebar/component';
import { HeaderComponent } from '../../../component/header/component';
import { SurveyModule } from 'survey-angular-ui';
import { Model } from 'survey-core';
import { BorderlessLight } from 'survey-core/themes';

@Component({
  selector: 'app-view-survey',
  standalone: true,
  imports: [
    CommonModule,
    SurveyModule
  ],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class ViewSurveyComponent {
  surveyModel: Model;

  constructor() {
    const surveyJson = {
      title: "Student Feedback Survey",
      description: "Please help us improve by completing this survey.",
      elements: [
        {
          type: "text",
          name: "student_name",
          title: "What is your name?"
        },
        {
          type: "radiogroup",
          name: "satisfaction",
          title: "How satisfied are you with the course?",
          choices: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied"]
        },
        {
          type: "checkbox",
          name: "improvements",
          title: "Which areas can we improve?",
          choices: ["Course Material", "Instructor Clarity", "Pace", "Assignments"]
        },
        {
          type: "dropdown",
          name: "year",
          title: "Which year are you in?",
          choices: ["1st Year", "2nd Year", "3rd Year", "4th Year"]
        },
        {
          type: "comment",
          name: "comments",
          title: "Any additional feedback?"
        }
      ]
    };

    this.surveyModel = new Model(surveyJson);
    this.surveyModel.applyTheme(BorderlessLight);
    this.surveyModel.width = "100%";
  }
}
