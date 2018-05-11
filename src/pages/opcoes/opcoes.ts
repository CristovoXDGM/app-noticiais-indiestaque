import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarNoticiaPage } from '../cadastrar-noticia/cadastrar-noticia';

@Component({
  selector: 'page-opcoes',
  templateUrl: 'opcoes.html'
})
export class OpEsPage {


  constructor(public navCtrl: NavController) {
    
  }


  goToCadastrarNoticia(){
    this.navCtrl.push(CadastrarNoticiaPage);
  }
  
}
