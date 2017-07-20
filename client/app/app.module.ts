import { routing } from './app.routes';
import { PainelModule } from './painel/painel.module';
import { Http } from '@angular/http';
import { FotoModule } from './foto/foto.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormsModule} from '@angular/forms'

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap:[AppComponent]

})
export class AppModule{}