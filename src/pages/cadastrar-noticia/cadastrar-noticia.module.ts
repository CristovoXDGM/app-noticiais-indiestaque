import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarNoticiaPage } from './cadastrar-noticia';

@NgModule({
  declarations: [
    CadastrarNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarNoticiaPage),
  ],
})
export class CadastrarNoticiaPageModule {}
