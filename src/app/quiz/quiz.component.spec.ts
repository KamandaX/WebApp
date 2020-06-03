import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizComponent } from './quiz.component';
import { QuizModule } from './quiz.module';
import { QuizService } from './quiz.service';
import { RecommendationDataService } from '../recommendation/recommendation-data.service';
import { NavigationService } from '../services/navigation.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import QuestionOption from './question-option/question-option.model';
import { Expose } from 'class-transformer';
import Question from './question.model';

describe('QuizComponent', () => {
    let fixture: ComponentFixture<QuizComponent> = null;
    let component: QuizComponent = null;

    beforeEach(() => {
        return TestBed.configureTestingModule({
            imports: [QuizModule],
            providers: [
                QuizService,
                RecommendationDataService,
                {
                    provide: NavigationService,
                    useValue: {
                        navigateToRecommendation: () => {
                        }
                    }
                },
                AuthService,
                HttpClient,
                HttpHandler
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(QuizComponent);
            component = fixture.componentInstance;
            component.question = new Question();
            fixture.detectChanges();
        });
    });

    it('should create component', () => {
        expect(component).not.toBeNull();
    });

    it('should get question if it has next question id', () => {
        const answer: QuestionOption = {
            answer: null,
            imageUrl: null,
            nextQuestionID: 1,
            multiplier: null,
        };
        const quizSpy = spyOn(component.quizService, 'getQuestion').and.callThrough();

        component.onOptionClicked(answer);
        fixture.detectChanges();
        expect(quizSpy).toHaveBeenCalled();
    });

    it('should get recommendation if it doesn\'t has next question id', () => {
        const answer: QuestionOption = {
            answer: null,
            imageUrl: null,
            nextQuestionID: null,
            multiplier: null,
        };
        const quizSpy = spyOn(component.quizService, 'getRecommendation').and.callThrough();

        component.onOptionClicked(answer);
        fixture.detectChanges();
        expect(quizSpy).toHaveBeenCalled();
    });
});
