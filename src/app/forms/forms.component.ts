import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
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
  request: any;
  pageValues: any;
  pageId = 'simple';
  pageitems: any;
  useValidation: boolean = false;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    public dataService: DataService,
    private formsService: FormsService
  ) {}
  createForm(pageitems, pageValues) {
    this.formDraft = new FormGroup(this.formsService.defineformControls(pageitems, pageValues));
  }
  ngOnInit() {
    this.useValidation = false;
    this.dataService.fetch(this.pageId).subscribe(data => {
      this.data = data;
      this.pageitems = this.data.meta;
      this.pageValues = this.data.formValues;
      this.createForm(this.pageitems, this.pageValues) ;
    });
  }
  onSubmit() {
    if (this.formDraft.value.createButton) {
      const event = this.formDraft.value.createButton.toLowerCase();
      delete this.formDraft.value.createButton;
      this.request = { formValues: this.formDraft.value, event: event };
      this.request.formValues.visitedPages = this.pageValues.visitedPages;
      console.log(this.formDraft);
      if (this.formDraft.invalid) {
        this.useValidation = true;
        return;
      } else {
        alert('submitted');
        //this.dataService.submitdataDraft(this.pageId,this.request);
      }
    }
  }
}
