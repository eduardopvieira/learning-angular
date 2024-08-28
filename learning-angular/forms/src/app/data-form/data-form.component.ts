import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario! : FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  
  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
      'is-valid': this.verificaValidTouched(campo)
    }
  }

  verificaValidTouched(campo: string): boolean {

    let control = this.formulario.get('campo')
    return control? !control.valid && control.touched : false;

  }

  onSubmit() {
    
    console.log(this.formulario.value); 
    
    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map((res: any) => res))
      .subscribe((dados: any) => {
        console.log(dados);
        //reseta o form apos a enviada da requisiçao:
        
         this.formulario.reset();
        });
    } else {
      alert ('erro')
    }
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],

    });

  };
}
