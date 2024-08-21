import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrl: './diretiva-ngswitch.component.scss'
})
export class DiretivaNgswitchComponent {
  aba: string = 'home'
  cursos: string[] = ['Angular', 'JS', 'Java'];

  index = 0;
}
