import { QuartaNoticiaaPage } from './../quarta-noticiaa/quarta-noticiaa';

import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PrimeiraNoticiaPage } from './../primeira-noticia/primeira-noticia';
import { SegundaNoticiaaPage } from '../segunda-noticiaa/segunda-noticiaa';
import { TerceiraNoticiaaPage } from '../terceira-noticiaa/terceira-noticiaa';

@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {
//Array com páginas das noticias
  notcias=[
    PrimeiraNoticiaPage,
    SegundaNoticiaaPage,
    TerceiraNoticiaaPage,
    QuartaNoticiaaPage
  ];
//implementar Firebase nessa parte
//nova mundaça teste
  noticia = [
    {
      id:1,
      categoria:'Categoria do jogo',
      tituloNoticia:'Nunca negocie com o Diabo!!',
      parteMateria:'parte da materia',
      img:"./assets/img/Cuphead.png",
      
    },
    {
      id:2,
      categoria:'Categoria do jogo',
      tituloNoticia:'Celeste um game que Impressiona',
      parteMateria:'parte da materia',
      img:"./assets/img/Celeste.jpg"
    },
    {
      id:3,
      categoria:'Categoria do jogo',
      tituloNoticia:'Iconoclasts',
      parteMateria:'parte da materia',
      img:"./assets/img/iconoclasts.jpg"
    },
    {
      id:4,
      categoria:'Categoria do jogo',
      tituloNoticia:'Veja a Nova continuação de Ori',
      parteMateria:'parte da materia',
      img:"./assets/img/oriori.jpg"
    }
  ];


  constructor(public navCtrl: NavController, public popoverCtrl : PopoverController, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);

    popover.present();
   
    

  }

  presentModal(id) {
    //Estrutura de repetição para pegar o id da noticia e verificar se está igual a posição da página desejada
    for (let i = 0; i < this.noticia.length; i++) {
      
      if(id == this.noticia[i].id){
          let modal = this.modalCtrl.create(this.notcias[i]);
          modal.present();
      }
      
    }
    
  }

  
  
 
}
