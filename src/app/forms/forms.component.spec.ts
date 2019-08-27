import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FormsComponent } from './forms.component';
import { DataService } from '../shared/services/data.service';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  let dataServiceFetchSpy;
  let data;

  beforeEach(async(() => {
    data = {};
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
              return of(data);
            },
            submitData: () => {
              return of({});
            }
          }
        },
      ]
})
      .compileComponents();
  }));

  beforeEach(() => {
    dataServiceFetchSpy = spyOn(
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
      let dataServiceSubmitdataSpy;

      beforeEach(() => {
        dataServiceSubmitdataSpy = spyOn(
          TestBed.get(DataService),
          'submitData'
        ).and.returnValue(of({}));
      });

      it('should submit the data', () => {
        component.onSubmit();
        expect(dataServiceSubmitdataSpy).toHaveBeenCalled();
      });
      it('should trigger validation error if form is invalid', () => {
        component.formDraft = new FormGroup({
          test: new FormControl('', Validators.required)
        });
        component.onSubmit();
        expect(component.useValidation).toBe(true);
      });
    });
  });

});
