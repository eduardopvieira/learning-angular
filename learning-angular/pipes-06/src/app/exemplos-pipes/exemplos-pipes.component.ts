import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string = 'gular';

  livro: any = {
    titulo: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
    rating: 4.8213,
    numPags: 264,
    preco: 74.99,
    dataLancamento: new Date(2017, 3, 24),
    url: 'https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634/ref=sr_1_1?adgrpid=151025974313&dib=eyJ2IjoiMSJ9._BQwo6gWOY4D3ovtes49F8xVoGp_Ni7R6tB4rBFOYEMupxme3SaRBrunZp6befnlKLN68m4nvDGtXto_rhy03Pt6WqG6HyGoPqoby6kyo5g9bDsdBfb-lXfqM7QZeoHDtWnZMULuGk3pRL2kZ6Cm_s6cM3pwAGwmQPMzGWI_BpQ_AlPPQdHx5dzF68ElNuJEFPzoNKIUVH14D2fK-WkG0EegkqR9mKycwaiLaTDjdoc.cKJ2fUVoDQ552yOgVRL1ouEbiy42905pX4Ib2wWfIc0&dib_tag=se&hvadid=660221240840&hvdev=c&hvlocphy=9101498&hvnetw=g&hvqmt=e&hvrand=10633574612131397327&hvtargid=kwd-309166023971&hydadcr=1389_13490970&keywords=entendendo+algoritmos&qid=1723748791&s=books&sr=1-1'
  }

  addLivros(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }


  obterLivros() {
    if (this.livros.length === 0 || this.filtro === null || this.filtro.trim() === '') {
      return this.livros;
    }

    return this.livros.filter((v: string) => {
      if (v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });

  }


  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Valor assincrono'), 2000
    })
  })

  valorAsync2 = new Observable<string>(observable => {
    setTimeout(() => {
      observable.next('Valor assíncrono 2');
    }, 2000);
  });
}
