import { Component } from '@angular/core';
import {NavController, NavParams, ViewController } from 'ionic-angular';
 
@Component({
  selector: 'page-terceira-noticiaa',
  templateUrl: 'terceira-noticiaa.html',
})
export class TerceiraNoticiaaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCTRL:ViewController) {
  }

  closeModal(){
    this.viewCTRL.dismiss();
  }

}