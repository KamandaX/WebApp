import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

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
        const getStartedSection: HTMLElement = fixture.debugElement.nativeElement.querySelector(
            '.getStartedSection'
        );
        expect(getStartedSection).toBeFalsy();
    });

    it('should have "Get Started" section visible when getStartedSectionVisible is true', () => {
        fixture.componentInstance.getStartedSectionVisible = true;
        fixture.detectChanges();
        const getStartedSection: HTMLElement = fixture.debugElement.nativeElement.querySelector(
            '.getStartedSection'
        );
        expect(getStartedSection).toBeTruthy();
    });
});
