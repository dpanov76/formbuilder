import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Injectable({
    providedIn: 'root'
})
export class FormsService {
    FormControls = [];

    constructor(private validationService: ValidationService) {
    }
    create(someJson, someData) {
        if (typeof someJson === 'object') {
            for (const prop in someJson) {

                if (prop === 'control') {
                    if (someJson.radioGroup !== undefined) {
                        // RadioButton Logic
                        if (Object.keys(someData).length !== 0) {
                            for (const radioEl of someJson.radioGroup) {
                                if (radioEl.value === someData[someJson.control]) {
                                    this.FormControls[someJson.control] = new FormControl(radioEl.value);
                                    break;
                                } else {
                                    this.createFormControl(null, someJson.control, someJson.validators);
                                }
                            }
                        } else {
                            //this.FormControls[someJson.control] = new FormControl();
                          this.createFormControl(null, someJson.control, someJson.validators);
                        }
                    } else {
                        if (someData[someJson.control]) {
                            this.FormControls[someJson.control] = new FormControl(someData[someJson.control]);
                        } else {
                            this.createFormControl(someJson.value, someJson.control, someJson.validators);
                        }
                    }
                }
                this.create(someJson[prop], someData);
            }
        }
        if (someJson !== undefined && someJson.isArray) {
            for (const item  of someJson) {
                this.create(someJson[item], someData);
            }
        }
    }

    createFormControl(initialValue: any, controlName: string, validators) {
      if (validators) {
        console.log('FormService Has validators', validators);
        this.FormControls[controlName] = new FormControl(initialValue, this.validationService.addControlValidationFn(validators));
        console.log('here', this.FormControls);
        return;
      }
      console.log('FormService No validators', validators);
      this.FormControls[controlName] = new FormControl(initialValue);
    }

    defineformControls(someJson: any, someData: any): any {
        this.FormControls = [];
        this.create(someJson, someData);
        return this.FormControls;
    }
}
