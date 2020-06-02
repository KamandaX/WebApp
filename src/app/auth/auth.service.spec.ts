import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationService } from '../services/navigation.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [AuthService, NavigationService],
            schemas: [NO_ERRORS_SCHEMA],
        });
        service = TestBed.inject(AuthService);

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

    it('should create the service', () => {
        expect(service).toBeDefined();
    });

    describe('getToken', () => {
        it('should retrieve the token from local storage', () => {
            const token = 'sometoken';
            localStorage.setItem('token', token);
            expect(service.getToken()).toEqual(token);
        });
    });

    describe('loggedIn', () => {
        it('should give true if token is stored', () => {
            localStorage.setItem('token', 'sometoken');
            expect(service.loggedIn()).toBeTrue();
        });

        it('should give false if no token is stored', () => {
            expect(service.loggedIn()).toBeFalse();
        });
    });

    describe('logoutUser', () => {
        it('should remove token from local storage', () => {
            const token = 'sometoken';
            localStorage.setItem('token', token);
            service.logoutUser();
            expect(service.getToken()).toBeNull();
        });
    });
});
