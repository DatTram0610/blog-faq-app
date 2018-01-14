import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable()
export class DataService {

  questions: Question[];
  constructor() {
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
};
