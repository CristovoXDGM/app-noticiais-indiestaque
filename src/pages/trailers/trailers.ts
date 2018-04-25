import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 

@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html'
})
export class TrailersPage {

  trailers = [
    {
      //Chamar links direto do banco
      link:'https://www.youtube.com/watch?v=2kPSl2vyu2Y',
      thumbnail:'./assets/img/oriori.jpg',
      titulo:'Melhor jogo indie exclusivo de Xbox one'
    },
    {
      link:'https://www.youtube.com/watch?v=D-1n15aIgsE',
      thumbnail:'./assets/img/Cuphead.png',
      titulo:'Melhor jogo indie exclusivo de Xbox one'
    }
  ]

  constructor(public navCtrl: NavController ) {
  }

  
  
}
