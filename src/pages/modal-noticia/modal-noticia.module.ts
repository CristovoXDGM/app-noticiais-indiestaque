import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNoticiaPage } from './modal-noticia';

@NgModule({
  declarations: [
    ModalNoticiaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNoticiaPage),
  ],
})
export class ModalNoticiaPageModule {}
