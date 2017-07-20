import { FotoComponent } from './foto.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs'; 
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService{
    http:Http;
    headers:Headers;
    url:string = 'v1/fotos';

    constructor(http:Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type','applicatopn/json');

    }

    lista():Observable<FotoComponent[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra(foto:FotoComponent): Observable<Response>{
        return this.http.post(this.url, JSON.stringify(foto),
            { headers:this.headers });
    }

    remove(foto:FotoComponent){
        return this.http.delete(foto + '/' + foto._id);
    }
}