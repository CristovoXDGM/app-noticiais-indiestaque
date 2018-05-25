import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { NoticiasPage } from '../noticias/noticias';
import { CadastrarNoticia } from '../../models/cadastrar-noticia/cadastrar-noticia.interface';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import {File}from '@ionic-native/file';
declare var window:any;


@Component({
  selector: 'page-cadastrar-noticia',
  templateUrl: 'cadastrar-noticia.html',
})
export class CadastrarNoticiaPage {
  
  image:any;
  public FirebaseRef:any;
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
     
    this.noticiasCollection = this.database.collection<CadastrarNoticia>('Noticias');
    this.noticias = this.noticiasCollection.valueChanges();
    this.FirebaseRef = firebase.storage().ref();
    
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

  enviarImagem(){
    const options: CameraOptions = {
      correctOrientation: true,
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      sourceType : this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
    this.camera.getPicture(options).then(fileuri =>{
    


      window.resolveLocalFileSystemURL("file://"+fileuri, FE=>{
        this.image = fileuri;

        this.cadastrarnoticia.imagem = this.image;
        
        FE.file(file=>{
          const FR = new FileReader()
          FR.onloadend = (res:any) => {
            let AF = res.target.result
            let blob = new Blob([new Uint8Array(AF)],{type:'image/jpg'})
            this.upload(blob);
          };
          FR.readAsArrayBuffer(file);
          let enviou = this.alertCtrl.create({
            message:"imagem enviada",
            buttons:[{
              text:"Continuar",
              handler:data=>{
                enviou.dismiss();
              }
            }]    
          });
          enviou.present();
        })
      })
    })
  }
  
  upload(blob:Blob){
    this.FirebaseRef.child(this.cadastrarnoticia.nomeImagem).put(blob);
  }

}
