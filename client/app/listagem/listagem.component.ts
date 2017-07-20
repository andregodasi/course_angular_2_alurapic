import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';
import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl:'./listagem.component.html'
})
export class ListagemComponent{
    fotos:FotoComponent[] = [];
    service:FotoService;
    constructor(service:FotoService){
       this.service = service;
       service.lista()
        .subscribe(fotos=> this.fotos = fotos  
        ,erro => console.log(erro));
    }

    remove(foto:FotoComponent){
        this.service.remove(foto)
            .subscribe(
                fotos =>console.log(fotos),
                erro => console.log(erro)
            )
    }
}