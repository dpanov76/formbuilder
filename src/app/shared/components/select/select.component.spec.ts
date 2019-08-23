import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectComponent} from './select.component';

describe('SelectComponent', () => {
  @Component({
    selector: `app-host-dummy-component`,
    template: `<app-select
            [group]="group"
            [label]="label"
            [item]="item"
            [hint]="hint"
            [classes]="classes"
            [labelFor]="labelFor"
            [showValidation]="showValidation"
            [validators]="validators"
        ></app-select>`
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
    @ViewChild(SelectComponent, {static: false})
    public checkboxComponent: SelectComponent;
  }

  let testHostComponent: TestDummyHostComponent;
  let testHostFixture: ComponentFixture<TestDummyHostComponent>;
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ SelectComponent, TestDummyHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDummyHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
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
