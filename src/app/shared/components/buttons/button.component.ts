import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input() idPrefix = 'btn';
    @Input() name = 'btn';
    @Input() group: FormGroup;
    @Input() classes;
    @Input() typeBtn;
    @Input() control;
    @Input() value;
}
