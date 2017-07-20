import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';



@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})

export class CadastroComponent{
    foto:FotoComponent = new FotoComponent();
    meuForm:FormGroup;
    service:FotoService;
    constructor( service:FotoService, fb:FormBuilder){
        this.service = service;
        this.meuForm = fb.group({
            titulo:['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url:['', Validators.required],
            descricao:[''],
        });
    }
    cadastrar(event){
        event.preventDefault();
       
       
        this.service.cadastra(this.foto).
        subscribe(()=>{
            console.log(this.foto);
            this.foto = new FotoComponent()
        },erro => console.log(erro));

    }
}