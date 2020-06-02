import {
    ComponentFixture,
    TestBed,
    async,
    fakeAsync,
    tick,
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { By } from '@angular/platform-browser';
import { Constants } from '../constants';

@Component({
    template: '<app-button><span>testing</span></app-button>',
})
class TestButtonComponent {}

describe('ButtonComponent', () => {
    let fixture: ComponentFixture<ButtonComponent>;
    let component: ButtonComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should render correct content', () => {
        const text = 'testing';
        const tempFixture = TestBed.createComponent(TestButtonComponent);
        const innerHtml = tempFixture.debugElement.query(By.css('span'))
            .nativeElement.innerHTML;
        expect(innerHtml).toContain(text);
    });

    it('should have correct styling based on attributes', () => {
        let button = fixture.debugElement.query(By.css('button'));

        component.isBig = true;
        fixture.detectChanges();
        expect(button.classes['button-large']).toBeTruthy();

        component.isLink = true;
        fixture.detectChanges();
        expect(button.classes['button-link']).toBeTruthy();

        component.buttonStyle = Constants.Button.Secondary;
        fixture.detectChanges();
        button = fixture.debugElement.query(By.css('button'));
        expect(button.classes['button-secondary']).toBeTruthy();

        component.buttonStyle = Constants.Button.Tertiary;
        fixture.detectChanges();
        button = fixture.debugElement.query(By.css('button'));
        expect(button.classes['button-tertiary']).toBeTruthy();
    });

    it('should fire a function on click', fakeAsync(() => {
        spyOn(component.buttonClicked, 'emit');

        const button = fixture.debugElement.query(By.css('button'))
            .nativeElement;
        button.click();
        tick();
        expect(component.buttonClicked.emit).toHaveBeenCalled();
    }));

    it('should be disabled if set so', () => {
        const button = fixture.debugElement.query(By.css('button'));

        component.disabled = true;
        fixture.detectChanges();
        expect(button.nativeElement.disabled).toBeTruthy();
    });
});
