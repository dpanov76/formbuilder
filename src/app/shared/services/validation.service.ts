import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validators = [];
  addControlValidationFn(validators) {
    console.log('Validation service called with', validators);
    this.validators = [];
    for (const v in validators) {
      if (v) {
        switch (validators[v].type) {
          case 'email':
            this.validators.push(Validators.email);
            break;
          case 'required':
            this.validators.push(Validators.required);
            console.log(this.validators);
            break;
          case 'minlength':
            this.validators.push(Validators.minLength(validators[v].value));
            break;
          case 'maxlength':
            this.validators.push(Validators.maxLength(validators[v].value));
            break;
          case 'pattern':
            this.validators.push(Validators.pattern(validators[v].regexp));
            break;
        }
      }
    }
    console.log('Validation service return', this.validators);
    return this.validators;
  }
}
