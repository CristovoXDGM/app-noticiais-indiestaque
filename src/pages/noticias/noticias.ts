import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {

  constructor(public navCtrl: NavController, public popoverCtrl : PopoverController) {
  }
  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present();
    popover.onDidDismiss(popoverData=>{
      console.log(popoverData); 
    })
  }
  
 
}
