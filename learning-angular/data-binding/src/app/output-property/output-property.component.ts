import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

  @Input() valor: number = 0

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput', { static: false }) campoValorInput!: ElementRef; // * diferenças em relação a aula: tem que ter o static: false e o "!" no final da variavel
  // ! o typescript permit colocar ! para variaveis que vc tem certeza de que serao inicializadas
  // ! algum momento antes de serem usadas


  incrementa() {
    this.campoValorInput.nativeElement.value++; //esse comando é pra mexer diretamente no comando que está no html, sem ter que recarregar o componente toda vez. bem util
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor })
  }

}
