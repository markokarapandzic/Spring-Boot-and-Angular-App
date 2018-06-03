import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Identifiers } from '@angular/compiler';
import { Projekat } from '../models/Projekat';

@Injectable()
export class ProjekatService {

    private readonly API_URL = 'http://localhost:8083/projekat/';

    dataChange: BehaviorSubject<Projekat[]> = new BehaviorSubject<Projekat[]>([]);

    constructor(private httpClient: HttpClient) { }


    public getAllProjekat(): Observable<Projekat[]> {
        this.httpClient.get<Projekat[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        },

            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });
        return this.dataChange.asObservable();
    }

    public addProjekat(projekat: Projekat): void {
        this.httpClient.post(this.API_URL, Projekat).subscribe();
    }

    public updateProjekat(projekat: Projekat): void {
        this.httpClient.put(this.API_URL, Projekat).subscribe();
    }

    public deleteProjekat(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}
