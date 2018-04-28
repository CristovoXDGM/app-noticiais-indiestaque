import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

 
@Component({
  selector: 'page-primeira-noticia',
  templateUrl: 'primeira-noticia.html',
})
export class PrimeiraNoticiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCTRL:ViewController) {
  }

  closeModal(){
    this.viewCTRL.dismiss();
  }

}
