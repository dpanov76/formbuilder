import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html'
})
export class InputComponent {
    @Input() group: FormGroup;
    @Input() item;
    @Input() label;
    @Input() hint;
    @Input() labelFor;
    @Input() showValidation;
    @Input() validators;
    name;
    id;
}
