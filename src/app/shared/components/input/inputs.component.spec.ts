import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './Input.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('InputComponent', () => {
  @Component({
    selector: `app-host-dummy-component`,
    template: `<app-input
            [group]="group"
            [label]="label"
            [item]="item"
            [hint]="hint"
            [classes]="classes"
            [labelFor]="labelFor"
            [showValidation]="showValidation"
            [validators]="validators"
        ></app-input>`
  })
  class TestDummyHostComponent {
    group: FormGroup;
    name = 'waste';
    item;
    label;
    hint;
    labelFor;
    showValidation;
    validators;
    id;
    @ViewChild(InputComponent, {static: false})
    public checkboxComponent: InputComponent;
  }

  let testHostComponent: TestDummyHostComponent;
  let testHostFixture: ComponentFixture<TestDummyHostComponent>;
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ InputComponent, TestDummyHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDummyHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be created by angular', () => {
    expect(fixture).not.toBeNull();
  });
});
