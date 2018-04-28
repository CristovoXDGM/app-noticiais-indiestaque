import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeiraNoticiaPage } from './primeira-noticia';

@NgModule({
  declarations: [
    PrimeiraNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeiraNoticiaPage),
  ],
})
export class PrimeiraNoticiaPageModule {}
