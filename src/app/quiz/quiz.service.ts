import { BackendService } from '../backend/backend.service';
import { Injectable } from '@angular/core';
import Question from './question.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly endpoint = 'questions';

  constructor(private backendService: BackendService) {}

  /**
   * If id is not provided function will return default/first question of id 0
   * @param id question id
   */
  getQuestion(id: number = 0) {
    return this.backendService.getData<Question>(
      Question,
      `${this.endpoint}/${id}`
    );
  }
}
