import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrl: './form-debug.component.css'
})
export class FormDebugComponent {

  @Input() form: any;

  valid = false;

  submitted = false;

  onSubmit() {
    this.submitted = this.form.submitted;
  }

  isValid() {
    this.valid =  this.form.get('email').valid && this.form.get('nome').valid
  }

}
