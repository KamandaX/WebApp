import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit {
  data;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getQuiz().subscribe(data => {
      this.data = data;
    });
  }

}
