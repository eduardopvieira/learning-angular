import { Component, OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 20;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  } // Método que é chamado quando o componente é inicializado

  ngOnChanges() {
    this.log('ngOnChanges');
  } // Método que é chamado quando o componente sofre alterações

  ngDoCheck() {
    this.log('ngDoCheck');
  } // Método que é chamado quando o componente é verificado

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  } // Método que é chamado após o conteúdo do componente ser inicializado

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  } // Método que é chamado após o conteúdo do componente ser verificado

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  } // Método que é chamado após a visualização do componente ser inicializada

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  } // Método que é chamado após a visualização do componente ser verificada

  ngOnDestroy() {
    this.log('ngOnDestroy');
  } // Método que é chamado quando o componente é destruído


  private log(hook: string) {
    console.log(hook);
  }

}
