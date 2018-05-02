import { EditUsersPage } from './../edit-users/edit-users';
import { CreateUserProvider,usuarios } from './../../providers/create-user/create-user';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { NavController, ViewController,AlertController ,ToastController } from 'ionic-angular';


@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {
  usuario:any[]= [];

  
  myphoto:any;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl:ViewController,
    private camera: Camera,
    public alertCrl:AlertController,
    private toastCTRL:ToastController,
    private userProvider:CreateUserProvider
  ) 
  {

  }

  getUser(usuario:usuarios){

    this.userProvider.getALL(usuario.id)
    .then((result: any[]) => {
      this.usuario = result;
      
    })
    .catch(() => {
      this.toastCTRL.create({ message: 'Erro ao carregar as categorias.', duration: 3000, position: 'botton' }).present();
    });

  }
  addtUser(id:number){
    this.navCtrl.push(EditUsersPage);
  }
  editUser(id:number){
    this.navCtrl.push(EditUsersPage,{id:id});
  }
  removeProduct(usuario: usuarios) {
    this.userProvider.remove(usuario.id)
      .then(() => {
        // Removendo do array de produtos
        var index = this.usuario.indexOf(usuario);
        this.usuario.splice(index, 1);
        this.toastCTRL.create({ message: 'Usuario removido.', duration: 3000, position: 'botton' }).present();
      })
  }



  takePhoto(){
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



  

