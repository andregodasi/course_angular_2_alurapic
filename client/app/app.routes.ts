import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes =[
    {path: '', component:ListagemComponent},
    {path: 'cadastro', component:CadastroComponent},
    {path: 'cadastro/:id', component:CadastroComponent},
    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
