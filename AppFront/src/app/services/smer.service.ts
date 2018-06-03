import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpErrorResponse, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Smer } from '../models/Smer';

@Injectable()
export class SmerService {

    private readonly API_URL = 'http://localhost:8083/smer/';

    dataChange: BehaviorSubject<Smer[]> = new BehaviorSubject<Smer[]>([]);

    constructor(private httpClient: HttpClient) { }

    public getAllSmerovi(): Observable<Smer[]> {

        this.httpClient.get<Smer[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        },
            (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            });

        return this.dataChange.asObservable();
    }

    public addSmer(smer: Smer): void {
        this.httpClient.post(this.API_URL, smer).subscribe();
    }

    public updateSmer(smer: Smer): void {
        this.httpClient.put(this.API_URL, smer).subscribe();
    }

    public deleteSmer(id: Number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
}
