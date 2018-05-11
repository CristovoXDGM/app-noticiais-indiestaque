import { CadastrarNoticia } from './../../models/cadastrar-noticia/cadastrar-noticia.interface';
import { Component } from '@angular/core';
import {  NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireList } from'angularfire2/database';


@Component({
  selector: 'page-cadastrar-noticia',
  templateUrl: 'cadastrar-noticia.html',
})
export class CadastrarNoticiaPage {


  cadastrarnoticia = {} as CadastrarNoticia;

   cadastrarnoticiaRef$: AngularFireList <CadastrarNoticia[] >;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl : PopoverController, 
    public navParams: NavParams,
    private database:AngularFireDatabase
  ) 
  {
    database.list<CadastrarNoticia>('noticias').valueChanges().subscribe(console.log);
    this.cadastrarnoticiaRef$ = this.database.list('NoticiasPage');


  }

  

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverComponent);

    popover.present();
     

  }

  addNoticia(cadastrarNoticia:CadastrarNoticia){
    
    this.cadastrarnoticiaRef$.push([this.cadastrarnoticia]);
    let listObsevable = this.cadastrarnoticiaRef$.snapshotChanges();
    listObsevable.subscribe();    
  }

}
