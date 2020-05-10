import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import Question from './question.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  question: Question;
  error: string;
  questionNumber = 1;
  loading = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion(id: number = 0) {
    this.loading = true;
    this.quizService.getQuestion(id).pipe(
      finalize(() => this.loading = false)
    ).subscribe(
      (question) => (this.question = question),
      (error) => (this.error = error)
    );
  }

  onOptionClicked(id: number) {
    if (id) {
      this.questionNumber++;
      this.loadQuestion(id);
    } else {
      console.log('Api request');
    }
  }
}
