import { FotoComponent } from './foto.component';
import { Http, Headers } from '@angular/http';

export class FotoService{
    http:Http;
    headers:Headers;
    url:string = 'v1/fotos';

    constructor(http:Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type','applicatopn/json')
    }
}