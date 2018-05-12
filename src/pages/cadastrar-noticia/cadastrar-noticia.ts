import { FirebaseCredentials } from './../../app/app.firebase.provider';

import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NoticiasPage } from '../noticias/noticias';
import {storage,initializeApp } from 'firebase';
import { CadastrarNoticia } from '../../models/cadastrar-noticia/cadastrar-noticia.interface';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-cadastrar-noticia',
  templateUrl: 'cadastrar-noticia.html',
})
export class CadastrarNoticiaPage {
  
   

  cadastrarnoticia = {} as CadastrarNoticia;
  private noticiasCollection:AngularFirestoreCollection<CadastrarNoticia>;
  noticias:Observable<CadastrarNoticia[]>;    
             
  constructor(
    public navCtrl: NavController,
    public popoverCtrl : PopoverController, 
    public navParams: NavParams,
    private camera:Camera,
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

 async Sendphoto(){
  try{
    const options: CameraOptions = {
      
      correctOrientation: true,
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY
   
    }
    
    
    const result = await this.camera.getPicture(options) ;

    const image = 'data:image/jpeg;base64,${result}';

    const pictures = storage().ref('pictures');

    pictures.putString(image,'data_url');
     } 
  catch(e){
     let erro =  this.alertCtrl.create({
        message:'Erro ao enviar imagem',
        buttons:[{
          text:'Continuar',
          handler:data=>{
            erro.dismiss();
          }
        }]
      });
      erro.present();
    }
 }

}
