 
 
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
 //import { Account } from '../../providers/auth/auth';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  myphoto:any;
 //model:Account;
  
 @ViewChild('email') email;
 @ViewChild('password') password;
 

  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController,
    private camera: Camera,
    public alertCrl:AlertController,
    public navParams:NavParams, 
    private fire: AngularFireAuth 
  ) 
  {
    
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.password.value)
    .then(data =>{
      
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
        title:'Error :'+error,
        buttons:[{
          text:'ok',
          handler:data=>{
            
            wrong.dismiss();
          }
        }]
      });
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



  

