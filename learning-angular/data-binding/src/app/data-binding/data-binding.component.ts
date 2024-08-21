import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';

  valorAtual: string = '';
  valorSalvo: string = '';

  valorInicial = 15;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  nomeDoBotao: string = 'Meu botão';

  imagemUrl = 'https://picsum.photos/536/354';

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }



  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  onMudouValor(evento: any) {
    console.log(evento);
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


  constructor() { }

  ngOnInit() { }



}
