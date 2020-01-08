import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { InputFormFieldsBaseComponent } from '../input-form-fields-base';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputFieldComponent extends InputFormFieldsBaseComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
    this.setDefaultFieldValues();
    this.initializeForm();
  }

  ngOnInit() {
  }

  private initializeForm(): void {
    this.fieldSettingsForm = this.formBuilder.group({
      title: ['', Validators.required],
      isRequired: [false]
    });
    this.fieldSettingsForm.markAllAsTouched();
  }

  private setDefaultFieldValues(): void {
    this.makingChanges = false;
    this.title = 'Text Input';
  }

}
