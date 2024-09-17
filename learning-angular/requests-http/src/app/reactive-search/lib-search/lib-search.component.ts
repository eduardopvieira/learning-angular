import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, Observable, pipe, switchMap, tap } from 'rxjs';

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
  readonly FIELDS = 'name,description,version,homepage'

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.results$ =
    this.queryField.valueChanges
      .pipe(
        map(value => value.trim()),
        filter(value => value.length > 1),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap(value => this.http.get(this.SEARCH_URL, {
          params: {
            search: value,
            fields: this.FIELDS
          }
        }))
      ).subscribe();
    tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
  }

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
