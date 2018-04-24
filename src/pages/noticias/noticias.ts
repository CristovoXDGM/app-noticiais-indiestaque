import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {

//implementar Firebase nessa parte
//nova mundaça teste
  noticia = [
    {
      id:1,
      categoria:'Categoria do jogo',
      tituloNoticia:'Nome da noticia',
      parteMateria:'parte da materia',
      img:"./assets/img/Cuphead.png",
      
    },
    {
      id:2,
      categoria:'Categoria do jogo',
      tituloNoticia:'Nome da noticia',
      parteMateria:'parte da materia',
      img:"./assets/img/Celeste.jpg"
    },
    {
      id:3,
      categoria:'Categoria do jogo',
      tituloNoticia:'Nome da noticia',
      parteMateria:'parte da materia',
      img:"./assets/img/iconoclasts.jpg"
    },
    {
      id:4,
      categoria:'Categoria do jogo',
      tituloNoticia:'Nome da noticia',
      parteMateria:'parte da materia',
      img:"./assets/img/oriori.jpg"
    }
  ];


  constructor(public navCtrl: NavController, public popoverCtrl : PopoverController, public alertCtrl: AlertController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);

    popover.present();
   
    

  }

  
  
 
}
