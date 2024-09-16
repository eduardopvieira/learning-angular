import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrl: './lib-search.component.scss'
})
export class LibSearchComponent implements OnInit {

  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$: Observable<any[]> = new Observable<any[]>();
  total?: number

  constructor(private http: HttpClient) { }

  ngOnInit() { }

  // onSearch() {
  //   console.log(this.queryField.value);

  //   this.results$ = this.http.get(this.SEARCH_URL + "?search=Angular")
  //     .pipe(
  //       tap((res: any) => this.total = res.total),
  //       map((res: any) => res.total)
  //     )
  // }

  onSearch() {
    const fields = 'name,description,version,homepage'
    let value = this.queryField.value; // || "Angular"
    if (value && (value = value.trim()) !== '') {

      const params_ = {
        search: value,
        fields: fields
      };

      let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields)

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total), // Atualiza o total de resultados
          map((res: any) => res.results) // Mapeia a resposta para a lista de bibliotecas
        );
    }
  }
}
