import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html'
})

export class TextareaComponent {
    @Input() group: FormGroup;
    @Input() labelFor;
    @Input() rows;
    @Input() classes;
    @Input() control;
    @Input() showValidation;
    @Input() label;
    @Input() items;
    @Input() validationError;
    @Input() validators;
    @Input() placeholder;
}
