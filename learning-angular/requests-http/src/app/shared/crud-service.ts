import { HttpClient } from "@angular/common/http";
import { delay, Observable, take, tap } from "rxjs";

export interface ServiceConfig {
    resourceEndpoint: string;
}

export class CrudService<T> {

    constructor(protected http: HttpClient, private API_URL: string) { }


    list() {
        return this.http.get<T[]>(this.API_URL)
            .pipe(
                delay(2000),
                tap(console.log)
            );
    }

    loadByID(id: string): Observable<T> {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    create(record: T) {
        return this.http.post<T>(`${this.API_URL}`, record).pipe(take(1));
    }

    update(record: T) {
        return this.http.put(`${this.API_URL}/${record['id' as keyof T]}`, record).pipe(take(1));
    }

    save(record: T) {
        if (record['id' as keyof T]) {
            return this.update(record);
        }
        return this.create(record);
    };

    remove(id: string) {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }
}
