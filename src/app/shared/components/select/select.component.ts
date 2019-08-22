import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
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
