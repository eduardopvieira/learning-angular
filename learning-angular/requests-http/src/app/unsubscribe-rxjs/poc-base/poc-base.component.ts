import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poc-base',
  templateUrl: './poc-base.component.html'
})
export class PocBaseComponent {

  @Input() nome?: string;
  @Input() valor?: string | null;
  @Input() estilo?: string;

}
