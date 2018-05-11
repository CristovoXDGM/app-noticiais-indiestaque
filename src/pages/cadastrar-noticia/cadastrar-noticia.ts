
import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NoticiasPage } from '../noticias/noticias';

import { CadastrarNoticia } from '../../models/cadastrar-noticia/cadastrar-noticia.interface';


@Component({
  selector: 'page-cadastrar-noticia',
  templateUrl: 'cadastrar-noticia.html',
})
export class CadastrarNoticiaPage {
image:any;

  cadastrarnoticia = {} as CadastrarNoticia;
  private noticiasCollection:AngularFirestoreCollection<CadastrarNoticia>;
  noticias:Observable<CadastrarNoticia[]>;    
             
  constructor(
    public navCtrl: NavController,
    public popoverCtrl : PopoverController, 
    public navParams: NavParams,

    private database:AngularFirestore,
    public alertCtrl:AlertController
  ) 
  {
    
    this.noticiasCollection = database.collection<CadastrarNoticia>('Noticias');
    this.noticias = this.noticiasCollection.valueChanges();
  }

  

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);

    popover.present();
     

  }

  addNoticia(cadastrarNoticia:CadastrarNoticia){

    this.noticiasCollection.add(this.cadastrarnoticia);
    let cadastrado = this.alertCtrl.create({
      title:"Noticia cadastrada",
      buttons:[{
        text:"Continuar",
        handler:data=>{
          this.navCtrl.setRoot(NoticiasPage);
        }
      }]
    });
    cadastrado.present();
  }

}
