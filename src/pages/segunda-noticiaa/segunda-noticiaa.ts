import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

 
@Component({
  selector: 'page-segunda-noticiaa',
  templateUrl: 'segunda-noticiaa.html',
})
export class SegundaNoticiaaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCTRL:ViewController) {
  }

  closeModal(){
    this.viewCTRL.dismiss();
  }

}
