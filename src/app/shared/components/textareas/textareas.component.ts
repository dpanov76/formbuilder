import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-textareas',
    templateUrl: './textareas.component.html'
})

export class TextareasComponent {
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

    constructor() {
    }

}
