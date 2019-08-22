import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import {CheckboxComponent} from './components/checkbox/checkbox.component';
import {RadiobuttonComponent} from './components/radiobutton/radiobutton.component';
import {TextareasComponent} from './components/textareas/textareas.component';
import {LabelComponent} from './components/label/label.component';
import {FieldsetComponent} from './components/fieldset/fieldset.component';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {LegendComponent} from './components/legend/legend.component';
import {HintComponent} from './components/hint/hint.component';
import {ValidationErrorFormControlComponent} from './components/validation-error-formcontrol/validation-error-formcontrol.component';
import {InputsComponent} from './components/inputs/inputs.component';
import {DateComponent} from './components/date/date.component';
import {FormsComponent} from '../forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormElementsComponent} from './components/jui-form-elements/form-elements.component';



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
        TextareasComponent,
        LabelComponent,
        FieldsetComponent,
        ButtonsComponent,
        LegendComponent,
        HintComponent,
        ValidationErrorFormControlComponent,
        InputsComponent,
        DateComponent,
        FormElementsComponent,
        FormsComponent
    ],
    exports: [
        CheckboxComponent,
        RadiobuttonComponent,
        TextareasComponent,
        LabelComponent,
        FieldsetComponent,
        ButtonsComponent,
        LegendComponent,
        HintComponent,
        ValidationErrorFormControlComponent,
        InputsComponent,
        DateComponent,
        FormElementsComponent
    ],
  providers: [
        DatePipe
  ]
})

export class SharedModule { }
