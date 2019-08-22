import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html'
})
export class FormElementsComponent{
    @Input() group: FormGroup;
    @Input() data;
    @Input() validate;
}
