import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() { //o importante é só até o ('mouseenter), o onMouseOver() é qualquer funçao que quiser dar.
    // this.rend.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() { //msma coisa aqui. mouseleave e mouseenter sao exclusivos do angular, nao é nome que eu dou. ver quais os outros.
    //this.rend.setStyle(this.elRef.nativeElement, 'background-color', 'white')
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = ''; //esse negocio resume MUITO o que tem que ser feito


  // ! Hostlistener: vai ficar escutando eventos no hospedeiro da diretiva (tag do html)
  // ! Hostbinding: permite que a gnt faça uma associação de um atributo ou classe do html para uma variavel

  constructor(private elRef: ElementRef, private rend: Renderer2) { }

}
