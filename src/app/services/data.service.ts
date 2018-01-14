import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Question } from '../models/question';

@Injectable()
export class DataService {

  questions: Question[];
  constructor(public http:Http) {
    this.questions = [
      {
        question: "How are you?",
        answer: "I am doing well",
        hide: true
      },
      {
        question: "How old are you?",
        answer: "I am pretty old",
        hide: true
      }
    ];
  };

  getQuestions(){
    return this.questions;
  };

  postQuestion(user) {
    console.log(user);
  };

  getLambdaResponse(){
    return this.http.get('https://bavbp8pfo9.execute-api.us-east-1.amazonaws.com/dev/hello').map(res => res.json())
  };
};
