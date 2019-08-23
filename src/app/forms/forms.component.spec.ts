import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FormsComponent } from './forms.component';
import { DataService } from '../shared/services/data.service';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  let decisionServiceFetchSpy;
  let decision;

  beforeEach(async(() => {
    decision = {};
    TestBed.configureTestingModule({
      declarations: [ FormsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserTransferStateModule,
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ DatePipe,
        {
          provide: DataService,
          useValue: {
            fetch: () => {
              return of(decision);
            },
            submitDecisionDraft: () => {
              return of({});
            }
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    decisionServiceFetchSpy = spyOn(
      TestBed.get(DataService),
      'fetch'
    ).and.returnValue(of({
      meta: {
      },
      formValues: {}
    }));
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on form submission', () => {

    describe('if form is valid', () => {
      let decisionServiceSubmitDecisionDraftSpy;

      beforeEach(() => {
        decisionServiceSubmitDecisionDraftSpy = spyOn(
          TestBed.get(DataService),
          'submitDecisionDraft'
        ).and.returnValue(of({}));
      });

      // it('should submit the decision', () => {
      //   component.formDraft.value.createButton = {
      //     toLowerCase: () => true
      //   };
      //   component.onSubmit();
      //   expect(decisionServiceSubmitDecisionDraftSpy).toHaveBeenCalled();
      // });
    });
  });
});
