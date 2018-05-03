 
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController, ViewController,AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  myphoto:any;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController,
    private camera: Camera,
    public alertCrl:AlertController 
  ) 
  {

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



  

