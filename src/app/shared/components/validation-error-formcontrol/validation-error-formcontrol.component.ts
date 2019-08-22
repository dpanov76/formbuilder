import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-validation-error-formcontrol',
    templateUrl: './validation-error-formcontrol.component.html'
})

export class ValidationErrorFormControlComponent {
    @Input() group: FormGroup;
    @Input() control;
    @Input() validators;

    getFieldError(control) {
      if (this.group.get(control).errors) {
        console.log(control, this.group.get(control).errors);
        return Object.keys(this.group.get(control).errors)[0];
      }
    }
}
