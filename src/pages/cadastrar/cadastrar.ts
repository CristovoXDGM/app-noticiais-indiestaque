import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, AlertController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import {File}from '@ionic-native/file';
import {AngularFireAuth} from 'angularfire2/auth';
import { CadastrarUsuarios } from '../../models/cadastrar-usuario/cadastrar-usuarios.interface';
declare var window:any;

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  public FirebaseRef:any;
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
    this.FirebaseRef = firebase.storage().ref();
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
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.ALLMEDIA,
      sourceType : this.camera.PictureSourceType.CAMERA
    }
    
    this.camera.getPicture(options).then(fileuri =>{
      
      window.resolveLocalFileSystemURL("file://"+fileuri, FE=>{
        this.myphoto = fileuri;

        this.cadastrarUsuario.imagem = this.myphoto;
        
        FE.file(file=>{
          const FR = new FileReader()
          FR.onloadend = (res:any)=>{
            let AF = res.target.result
            let blob = new Blob([new Uint8Array(AF)],{type:'image/jpg'})
            this.upload(blob);
          };
          FR.readAsArrayBuffer(file);
          //Alert avisando que  a imagem foi cadastrada;
          let enviou = this.alertCrl.create({
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
    });
     
  }


  getPhoto(){
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
        this.myphoto = fileuri;

        this.cadastrarUsuario.imagem = this.myphoto;
        
        FE.file(file=>{
          const FR = new FileReader()
          FR.onloadend = (res:any)=>{
            let AF = res.target.result
            let blob = new Blob([new Uint8Array(AF)],{type:'image/jpg'})
            this.upload(blob);
          };
          FR.readAsArrayBuffer(file);
          //Alert avisando que  a imagem foi cadastrada;
          let enviou = this.alertCrl.create({
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
    });
     
  }
  upload(blob:Blob){
    this.FirebaseRef.child(this.cadastrarUsuario.nome).put(blob);
  }

}



  

