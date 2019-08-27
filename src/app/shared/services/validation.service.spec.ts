import { TestBed } from '@angular/core/testing';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationService = TestBed.get(ValidationService);
    expect(service).toBeTruthy();
  });

  it('should return validation function based on validator', () => {
    const service: ValidationService = TestBed.get(ValidationService);
    const validators = [
      {
        type: 'email'
      },
      {
        type: 'required'
      },
      {
        type: 'minlength',
        value: 3
      },
      {
        type: 'maxlength',
        value: 13
      },
      {
        type: 'pattern',
        regexp: '[0-9]'
      },
      {
        type: 'required',
        checkbox: true
      },
    ];
    expect(service.addControlValidationFn(validators)).toBeTruthy();
  });
});
