import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, ViewChild} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonComponent} from './button.component';

describe('ButtonsComponent', () => {
  @Component({
    selector: `app-host-dummy-component`,
    template: `<app-button
            [idPrefix]="idPrefix"
            [name]="name"
            [group]="group"
            [classes]="classes"
            [typeBtn]="typeBtn"
            [control]="control"
            [value]="value"
        ></app-button>`
  })
  class TestDummyHostComponent {
    idPrefix = 'btn';
    name = 'btn';
    group: FormGroup;
    classes;
    typeBtn;
    control;
    value;
    @ViewChild(ButtonComponent, {static: false})
    public buttonComponent: ButtonComponent;
  }

  let testHostComponent: TestDummyHostComponent;
  let testHostFixture: ComponentFixture<TestDummyHostComponent>;
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ ButtonComponent, TestDummyHostComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestDummyHostComponent);
    testHostComponent = testHostFixture.componentInstance;
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be created by angular', () => {
    expect(fixture).not.toBeNull();
  });
  it('should be all data undefined until detectChanges kicks in', () => {
    expect(testHostComponent.buttonComponent.classes).toBeUndefined();
    expect(testHostComponent.buttonComponent.typeBtn).toBeUndefined();
    expect(testHostComponent.buttonComponent.control).toBeUndefined();
  });
  it('should load data', () => {
    testHostFixture.detectChanges();
    expect(testHostComponent.buttonComponent.idPrefix).toEqual('btn');
    expect(testHostComponent.buttonComponent.name).toEqual( 'btn');
  });
  it('test data type', () => {
    testHostFixture.detectChanges();
    expect(typeof testHostComponent.buttonComponent.idPrefix === 'string').toBeTruthy();
    expect(typeof testHostComponent.buttonComponent.name === 'string').toBeTruthy();
  });
});
