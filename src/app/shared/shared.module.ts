import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {LabelComponent} from './components/label/label.component';
import {FieldsetComponent} from './components/fieldset/fieldset.component';
import {ButtonComponent} from './components/button/button.component';
import {LegendComponent} from './components/legend/legend.component';
import {HintComponent} from './components/hint/hint.component';
import {ValidationErrorFormControlComponent} from './components/validation-error-formcontrol/validation-error-formcontrol.component';
import {InputComponent} from './components/input/input.component';
import {FormsComponent} from '../forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormElementsComponent} from './components/form-elements/form-elements.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        CheckboxComponent,
        RadiobuttonComponent,
        TextareaComponent,
        LabelComponent,
        FieldsetComponent,
        ButtonComponent,
        LegendComponent,
        HintComponent,
        ValidationErrorFormControlComponent,
        InputComponent,
        FormElementsComponent,
        FormsComponent,
        SelectComponent
    ],
    exports: [
        CheckboxComponent,
        RadiobuttonComponent,
        TextareaComponent,
        LabelComponent,
        FieldsetComponent,
        ButtonComponent,
        LegendComponent,
        HintComponent,
        ValidationErrorFormControlComponent,
        InputComponent,
        FormElementsComponent
    ],
  providers: [
        DatePipe
  ]
})

export class SharedModule { }
