import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../shared/services/forms.service';
import {DataService} from '../shared/services/data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  formDraft: FormGroup;
  data: any;
  pageValues: any;
  pageId = 'simple';
  pageItems: any;
  useValidation: boolean;

  constructor(
    public dataService: DataService,
    private formsService: FormsService
  ) {}
  createForm(pageItems, pageValues) {
    this.formDraft = new FormGroup(this.formsService.defineformControls(pageItems, pageValues));
  }
  ngOnInit() {
    this.useValidation = false;
    this.dataService.fetch(this.pageId).subscribe(data => {
      this.data = data;
      this.pageItems = this.data.meta;
      this.pageValues = this.data.formValues;
      this.createForm(this.pageItems, this.pageValues) ;
    });
  }
  onSubmit() {
    if (this.formDraft.invalid) {
      this.useValidation = true;
      alert('Something wrong!');
      return;
    } else {
      // Hack for JSON server
      this.data.formValues = this.formDraft.value;
      this.dataService.submitData(this.pageId, this.data).subscribe(() => {
         console.log('Done');
      });
    }
  }
}
