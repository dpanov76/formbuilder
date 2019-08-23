import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RadiobuttonComponent} from './radiobutton.component';

describe('RadiobuttonComponent', () => {
  @Component({
    selector: `app-host-dummy-component`,
    template: `<app-radiobutton
            [group]="group"
            [label]="label"
            [item]="item"
            [hint]="hint"
            [classes]="classes"
            [labelFor]="labelFor"
            [showValidation]="showValidation"
            [validators]="validators"
        ></app-radiobutton>`
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
    @ViewChild(RadiobuttonComponent, {static: false})
    public checkboxComponent: RadiobuttonComponent;
  }

  let testHostComponent: TestDummyHostComponent;
  let testHostFixture: ComponentFixture<TestDummyHostComponent>;
  let component: RadiobuttonComponent;
  let fixture: ComponentFixture<RadiobuttonComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ RadiobuttonComponent, TestDummyHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDummyHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonComponent);
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

