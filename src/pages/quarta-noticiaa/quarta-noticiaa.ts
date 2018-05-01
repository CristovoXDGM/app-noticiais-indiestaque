import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

 
@Component({
  selector: 'page-quarta-noticiaa',
  templateUrl: 'quarta-noticiaa.html',
})
export class QuartaNoticiaaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCTRL:ViewController) {
  }

  closeModal(){
    this.viewCTRL.dismiss();
  }

}
