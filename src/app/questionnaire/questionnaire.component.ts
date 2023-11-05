import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class QuestionnaireComponent {
  questions = [
    { required: true, text: 'How would you rate the quality of the textbook?', type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: 'How many lectures did you attend?', type: 'radio', options: ['All', 'More than half', 'Half', 'Less than half'] },
    { required: true, text: 'What did you find easy throughout the module?', type: 'textarea' },
    { required: true, text: 'What did you find hard throughout the module?', type: 'textarea' },
    { required: true, text: "How audible was the lecturer's voice?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the lecturing pace?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the video material?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the workshop lectures?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the practicals' requirements?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the supervisor availability?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the balance between lectures and practicals?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How would you rate the feedback given for practicals?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: true, text: "How many hours did you spend on practicals?", type: 'radio', options: ['40+', '30+', '20+', '10+', '0+'] },
    { required: true, text: "How many hours did you spend on this module?", type: 'radio', options: ['80+', '60+', '40+', '20+', '0+'] },
    { required: true, text: "How would you rate this module compared to other modules?", type: 'radio', options: ['Excellent', 'Good', 'Average', 'Poor', 'Terrible'] },
    { required: false, text: 'Any other comments (Optional)', type: 'textarea' }
  ]
  questionnaireResponses: any[] = [];
  submitted = false;
  completed = false;

  submitForm() {
    this.submitted = true;
    this.completed = this.questionnaireResponses.length > 0 && !this.hasEmptyCells(this.questionnaireResponses);
  }

  hasEmptyCells(arr: string | any[]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined || arr[i] === null) {
        return true;
      }
    }
    return false;
  }
}
