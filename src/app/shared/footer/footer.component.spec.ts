import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
    let fixture: ComponentFixture<FooterComponent>;
    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should have "Get Started" section hidden by default', () => {
        const getStartedSection = fixture.debugElement.query(
            By.css('.getStartedSection')
        );
        expect(getStartedSection).toBeFalsy();
    });

    it('should have "Get Started" section visible when getStartedSectionVisible is true', () => {
        fixture.componentInstance.getStartedSectionVisible = true;
        fixture.detectChanges();
        const getStartedSection = fixture.debugElement.query(
            By.css('.getStartedSection')
        );
        expect(getStartedSection).toBeTruthy();
    });
});
