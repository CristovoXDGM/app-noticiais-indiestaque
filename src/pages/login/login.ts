import { Storage } from '@ionic/storage';

import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component, ViewChild,  ChangeDetectorRef } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { NoticiasPage } from '../noticias/noticias';
import { CadastrarUsuarios } from '../../models/cadastrar-usuario/cadastrar-usuarios.interface';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

     islogged:boolean = false;;

  cadastrarUsuario = {} as CadastrarUsuarios;
   
   userLogged =  
     {
      logged:false,
      name:'',
      email:'',
       profilepicture:''
     }
   
  constructor(public storage:Storage,
    public  fire:AngularFireAuth,
    public navCtrl: NavController, 
    public viewCTRL: ViewController,
    params: NavParams,
    public alertCtrl:AlertController,
    public ref:ChangeDetectorRef
  ) {
      
    }


    alert(message: string){
      this.alertCtrl.create({
        title: 'Info!',
        subTitle: message,
        buttons: ['OK'],
        
      }).present();
    }


    goTocadastrar(){
      this.navCtrl.push(CadastrarPage);
    }

    signIn(){
    
      this.fire.auth.signInWithEmailAndPassword(this.cadastrarUsuario.email,this.cadastrarUsuario.password)
      .then(data=>{
        this.alert('Seja bem-vindo');
        this.navCtrl.setRoot(NoticiasPage);
        console.log('got some data',data);
      })
      .catch(error=>{
        this.alert(error.message);
        console.log('Erro',error);
      })
    }

   logIn(provider){

    let sigInProvider = null;
    switch (provider) {
      case "facebook":
      sigInProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "twitter":
      sigInProvider = new firebase.auth.TwitterAuthProvider();
       break;
      case "google":
      sigInProvider = new firebase.auth.GoogleAuthProvider();
       
     }
     this.fire.auth.signInWithRedirect(sigInProvider)
      .then(() =>{
        this.fire.auth.getRedirectResult().then(res => {
        
        
        this.userLogged.logged=true;
        this.userLogged.name = res.user.displayName;
        this.userLogged.email = res.user.email;
        this.userLogged.profilepicture = res.user.photoURL;
        this.ref.detectChanges();
        console.log(res);
        this.navCtrl.setRoot(NoticiasPage);
        
        });
         
      })
      .catch(error =>{
        let erro = this.alertCtrl.create({
          message:error
        });
        erro.present();
        
      })
   }

   logOut(){
      this.fire.auth.signOut()
      .then(()=>{
        this.alertCtrl.create({
          message:'Você foi desconectado',
          buttons:[{
            text:'Ok',
            handler:data=>{
              this.viewCTRL.dismiss();
            }
          }]
        })
      })
      this.userLogged.logged  = false;
      
    }

   
  
}
