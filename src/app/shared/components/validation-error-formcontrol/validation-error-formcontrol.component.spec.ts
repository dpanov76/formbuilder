import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ValidationErrorFormControlComponent} from './validation-error-formcontrol.component';

describe('ValidationErrorFormControlComponent', () => {
  @Component({
    selector: `app-host-dummy-component`,
    template: `<app-validation-error-formcontrol
            [group]="group"
            [control]="control"
            [validators]="validators"
        ></app-validation-error-formcontrol>`
  })
  class TestDummyHostComponent {
    group: FormGroup;
    validators;
    control;
    @ViewChild(ValidationErrorFormControlComponent, {static: false})
    public validationErrorFormControlComponent: ValidationErrorFormControlComponent;
  }

  let testHostComponent: TestDummyHostComponent;
  let testHostFixture: ComponentFixture<TestDummyHostComponent>;
  let component: ValidationErrorFormControlComponent;
  let fixture: ComponentFixture<ValidationErrorFormControlComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ ValidationErrorFormControlComponent, TestDummyHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDummyHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationErrorFormControlComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be created by angular', () => {
    expect(fixture).not.toBeNull();
  });
  it('should return validator name if invalid', () => {
    component.group = new FormGroup({
      test: new FormControl('', Validators.required)
    });
    expect(component.getFieldError('test')).toBe('required');
  });
  it('should return nothing if valid', () => {
    component.group = new FormGroup({
      test: new FormControl('')
    });
    expect(component.getFieldError('test')).toBe(undefined);
  });
});

