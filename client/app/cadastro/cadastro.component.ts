import { FotoService } from './../foto/foto.service';
import { FotoComponent } from './../foto/foto.component';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html' 
})

export class CadastroComponent{
    foto:FotoComponent = new FotoComponent();
    meuForm:FormGroup;
    service:FotoService;
    route:ActivatedRoute;
    router:Router;
    mensagem:string = '';
    constructor( service:FotoService, fb:FormBuilder, route:ActivatedRoute, router:Router){
        this.route = route;
        this.service = service;
        this.router = router;
        this.route.params.subscribe(params =>{
            let id  = params['id'];

            if(id){
                this.service.buscarPorId(id)
                    .subscribe(
                        foto => {
                            if(foto){
                                this.mensagem = 'Foto encontrada com sucesso';
                                this.foto = foto;
                            }else{
                                 this.mensagem = "Opss! não encontramos essa foto."
                            }
                            
                        },
                        erro => {
                            this.mensagem = "Opss! não encontramos essa foto."
                            console.log(erro);
                        }
                    )
            }
        });
        this.meuForm = fb.group({
            titulo:['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url:['', Validators.required],
            descricao:[''],
        });
    }
    cadastrar(event){
        event.preventDefault();       
        this.service.cadastra(this.foto).
        subscribe(res =>{
            this.mensagem = res.mensagem;
            this.foto = new FotoComponent();
            if(!res.inclusao)this.router.navigate(['']);
        },erro => {
            console.log(erro)
            this.mensagem = 'Opss! não foi possivel salvar a foto';
        });

    }
}

