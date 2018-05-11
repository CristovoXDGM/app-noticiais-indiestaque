import { QuartaNoticiaaPage } from './../quarta-noticiaa/quarta-noticiaa';

import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PrimeiraNoticiaPage } from './../primeira-noticia/primeira-noticia';
import { SegundaNoticiaaPage } from '../segunda-noticiaa/segunda-noticiaa';
import { TerceiraNoticiaaPage } from '../terceira-noticiaa/terceira-noticiaa';
import { Storage } from '@ionic/storage';
import { CadastrarNoticia } from '../../models/cadastrar-noticia/cadastrar-noticia.interface';
import { AngularFirestore, AngularFirestoreCollection } from'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html'
})
export class NoticiasPage {

  
//Array com páginas das noticias 
notcs=[
    PrimeiraNoticiaPage,
    SegundaNoticiaaPage,
    TerceiraNoticiaaPage,
    QuartaNoticiaaPage
  ];
//implementar Firebase nessa parte
//nova mundaça teste
  not = [
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
      img:" ./assets/img/Iconoclasts.jpg"
    },
    {
      id:4,
      categoria:'Categoria do jogo',
      tituloNoticia:'Veja a Nova continuação de Ori',
      parteMateria:'parte da materia',
      img:"./assets/img/oriori.jpg"
    }
  ];

  private noticiasCollection:AngularFirestoreCollection<CadastrarNoticia>;
  noticias:Observable<CadastrarNoticia[]>; 

  constructor(
      public navCtrl: NavController,
      public popoverCtrl : PopoverController,
      public alertCtrl: AlertController,
      public modalCtrl: ModalController,
      public storage:Storage,
      private db:AngularFirestore
      ) 
      {
      
        this.noticiasCollection = db.collection<CadastrarNoticia>('Noticias');
        this.noticias = this.noticiasCollection.valueChanges();
        
      }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);

    popover.present();
     

  }

  presentModal(id) {
    //Estrutura de repetição para pegar o id da noticia e verificar se está igual a posição da página desejada
    for (let i = 0; i < this.not.length; i++) {
      
      if(id == this.not[i].id){
          let modal = this.modalCtrl.create(this.notcs[i]);
          modal.present();
      }
      
    }
    
  }

  
  
 
}
