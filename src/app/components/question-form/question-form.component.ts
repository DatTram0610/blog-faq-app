import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  @Output() questionAdded = new EventEmitter<Question>();

  question:string;
  answer:string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion() {
    this.questionAdded.emit({question:this.question, answer:this.answer, hide:true});
  }

}
