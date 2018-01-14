import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { Question } from '../../models/question';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {

  questions: Question[];

  constructor(public dataService: DataService) {
  };

  ngOnInit() {
    this.questions = this.dataService.getQuestions();
    this.checkLambda();
  };

  addQuestion(question: Question) {
    this.dataService.postQuestion(question);
  };

  checkLambda() {
    this.dataService.getLambdaResponse().subscribe(res => {
      console.log(res.message)
    });
  };
};

