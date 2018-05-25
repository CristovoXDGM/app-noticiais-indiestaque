import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
 
 
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
 //import { Account } from '../../providers/auth/auth';
import {AngularFireAuth} from 'angularfire2/auth';
import { CadastrarUsuarios } from '../../models/cadastrar-usuario/cadastrar-usuarios.interface';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {


  myphoto:any;
 //model:Account;
  
 cadastrarUsuario = {} as CadastrarUsuarios;
 private usuariosCollection: AngularFirestoreCollection<CadastrarUsuarios>;
 usuarios:Observable<CadastrarUsuarios[]>;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController,
    private camera: Camera,
    private database:AngularFirestore,
    public alertCrl:AlertController,
    public navParams:NavParams, 
    private fire: AngularFireAuth 
  ) 
  {
    this.usuariosCollection = database.collection<CadastrarUsuarios>('usuarios');
    this.usuarios = this.usuariosCollection.valueChanges();
  }

  registerUser(cadastraruUsuario:CadastrarUsuarios){
    this.fire.auth.createUserWithEmailAndPassword(this.cadastrarUsuario.email,this.cadastrarUsuario.password)
    .then(data =>{
      this.usuariosCollection.add(this.cadastrarUsuario);
      let create = this.alertCrl.create({

        title:'Usuário cadastrado',
        buttons:[{
          text:'ok',
          handler:data=>{
            
            this.viewCtrl.dismiss();
          }
        }]

      });
      create.present();

    })
    .catch(error=>{
      let wrong = this.alertCrl.create({
        title:'Não foi possivel cadastrar, verifique se o e-mail e a senha estão corretos' ,
        buttons:[{
          text:'ok',
          handler:data=>{
            
            this.navCtrl.push(CadastrarPage);
          }
        }]
      });
      wrong.present();
    });
  }
 



  takePhoto(){
    const options: CameraOptions = {
      correctOrientation: true,
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType : this.camera.PictureSourceType.CAMERA
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
     
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      
    });
  }

  getPhoto(){
    const options: CameraOptions = {
      correctOrientation: true,
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType : this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    
    this.camera.getPicture(options).then((imageData) => {
     
     this.myphoto = 'data:image/jpeg;base64,' + imageData;

     
    }, (err) => {
      
    });
  }

}



  

