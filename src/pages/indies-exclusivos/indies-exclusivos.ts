import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-indies-exclusivos',
  templateUrl: 'indies-exclusivos.html'
})
export class IndiesExclusivosPage {


  plataforma = [
    {
      nome:'Xbox',
      img:''
    },
    {
      nome:'Playstation',
      img:''
    },
    {
      nome:'Nintendo',
      img:''
    },
    {
      nome:'PC',
      img:''
    }
  ];

  constructor(public navCtrl: NavController) {
  }
 
  //terminar de construir a pagina de exclusivos de cada plataforma


}
