import {
    TestBed,
    ComponentFixture,
    async,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationService } from 'src/app/services/navigation.service';
import { AuthService } from '../auth.service';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
    let fixture: ComponentFixture<LoginPageComponent>;
    let component: LoginPageComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                ButtonModule,
                FormsModule,
                CommonModule,
            ],
            providers: [
                {
                    provide: NavigationService,
                    useValue: { navigateToQuiz: () => true },
                },
                AuthService,
            ],
            declarations: [LoginPageComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        let store = {};
        const mockLocalStorage = {
            getItem: (key: string): string => {
                return key in store ? store[key] : null;
            },
            setItem: (key: string, value: string) => {
                store[key] = `${value}`;
            },
            removeItem: (key: string) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            },
        };
        spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
        spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
        spyOn(localStorage, 'removeItem').and.callFake(
            mockLocalStorage.removeItem
        );
        spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    });

    it('should create the component', () => {
        expect(component).toBeDefined();
    });

    describe('onLoginUser', () => {
        it('should retrieve the token from local storage', () => {
            const sampleToken = 'sampletoken';

            const mockAuthService = fixture.debugElement.injector.get(
                AuthService
            );
            spyOn(mockAuthService, 'loginUser').and.callFake(() =>
                of({ token: sampleToken })
            );

            component.onLoginUser();
            fixture.detectChanges();
            expect(localStorage.getItem('token')).toBe(sampleToken);
        });

        it('should show error if failed to log in', fakeAsync(() => {
            const sampleError = { error: { details: 'sampleErrorDetails' } };

            const mockAuthService = fixture.debugElement.injector.get(
                AuthService
            );
            spyOn(mockAuthService, 'loginUser').and.callFake((user) =>
                throwError(sampleError)
            );

            tick(1);
            component.onLoginUser();
            fixture.detectChanges();
            expect(component.errorText).toBe(sampleError.error.details);

            const errorDiv = fixture.debugElement.query(By.css('.error'));

            expect(errorDiv.nativeElement.innerHTML).toMatch(
                sampleError.error.details
            );
        }));
    });
});
