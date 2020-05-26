import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { QuizService } from './quiz.service';
import Question from './question.model';
import { finalize } from 'rxjs/operators';
import { AnswerModel } from './answer.model';
import QuestionOption from './question-option/question-option.model';
import { RecommendationDataService } from '../recommendation/recommendation-data.service';
import { NavigationService } from '../services/navigation.service';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
    question: Question;
    error: string;
    questionNumber = 0;
    loading = false;
    answers: AnswerModel[] = [];

    constructor(private quizService: QuizService,
                private recommendationService: RecommendationDataService,
                private navigationService: NavigationService) {
    }

    ngOnInit(): void {
        this.loadQuestion();
    }

    loadQuestion(id: number = 0) {
        this.loading = true;
        this.quizService
            .getQuestion(id)
            .pipe(finalize(() => (this.loading = false)))
            .subscribe(
                question => {
                    this.question = question;
                    this.questionNumber++;
                },
                (error) => (this.error = error)
            );
    }

    onOptionClicked(id: number, answer: QuestionOption) {
        this.answers.push({aspect: this.question.aspect, multiplier: answer.multiplier});
        if (id) {
            this.loadQuestion(id);
        } else {
            this.loading = true;
            this.quizService.getRecommendation(this.answers).pipe(finalize(() => this.loading = false))
                .subscribe(
                    result => {
                        this.recommendationService.setRecommendation(result);
                        this.navigationService.navigateToRecommendation();
                    },
                    err => this.error = err
                );
        }
    }
}
