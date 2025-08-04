export interface SurveyQuestion {
  name: string;
  title: string;
  type: 'text' | 'checkbox' | 'radiogroup' | 'dropdown';
  choices?: string[];
}
