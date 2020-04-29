import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import Question from './question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {
  public question: Question;
  public error: string;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuestion().subscribe(
      (question) => (this.question = question),
      (error) => (this.error = error)
    );
  }
}
