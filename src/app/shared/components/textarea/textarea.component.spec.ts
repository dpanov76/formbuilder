import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TextareaComponent} from './textarea.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LabelComponent} from '../label/label.component';
import {ValidationErrorFormControlComponent} from '../validation-error-formcontrol/validation-error-formcontrol.component';
import {DatePipe} from '@angular/common';
import {ValidationService} from '../../services/validation.service';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let MockFormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ ReactiveFormsModule ],
        declarations: [ TextareaComponent, LabelComponent, ValidationErrorFormControlComponent ],
        providers: [ DatePipe,
            {
                provide: ValidationService
            }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
        fixture = TestBed.createComponent(TextareaComponent);
        component = fixture.componentInstance;
        MockFormGroup = new FormGroup({
            testControl: new FormControl('', Validators.required)
        });
        component.control = 'testControl';
        component.group = MockFormGroup;
        fixture.detectChanges();
    });

  it('should create', () => {
        expect(component).toBeTruthy();
    });
});
