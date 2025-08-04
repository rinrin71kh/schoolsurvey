import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../component/sidebar/component';
import { HeaderComponent } from '../../../component/header/component';

@Component({
  selector: 'app-create-survey',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, HeaderComponent],
  templateUrl: './template.html',
  styleUrls: ['./style.css']
})
export class CreateSurveyComponent {
  surveyTitle = '';
  questions: any[] = [];

  addQuestion() {
    this.questions.push({
      name: `question${this.questions.length + 1}`,
      title: '',
      type: 'text',
      choices: []
    });
  }

  addChoice(question: any) {
    question.choices.push({ value: '' });

  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }
  trackByIndex(index: number, item: any): any {
  return index;
}

  saveSurvey() {
    const surveyJson = {
      title: this.surveyTitle,
      elements: this.questions.map(q => ({
        name: q.name,
        title: q.title,
        type: q.type,
        choices: q.type !== 'text' ? q.choices.filter((c: string) => c.trim() !== '') : undefined
      }))
    };
    console.log('Survey JSON:', surveyJson);
    alert('Survey saved. Check the console.');
  }
}
