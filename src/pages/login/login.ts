import { Storage } from '@ionic/storage';

import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController, NavParams, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth'
import { NoticiasPage } from '../noticias/noticias';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  teste:any;

    @ViewChild('email') email;
    @ViewChild('password') password;
   
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
    
      this.fire.auth.signInWithEmailAndPassword(this.email.value,this.password.value)
      .then(data=>{
        this.alert('Success you\'re logged in')
        this.navCtrl.setRoot(NoticiasPage);
        console.log('got some data',data);
      })
      .catch(error=>{
        this.alert(error.message);
        console.log('got an error',error);
      })
    }

   logInWithfacebook(){
      this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res =>{
        this.userLogged.logged=true;
        this.userLogged.name = res.user.displayName;
        this.userLogged.email = res.user.email;
        this.userLogged.profilepicture = res.user.photoURL;
        console.log(res);
        
         
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

   logInWithGoogle(){
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res =>{
      this.userLogged.logged=true;
      this.userLogged.name = res.user.displayName;
      this.userLogged.email = res.user.email;
      this.userLogged.profilepicture = res.user.photoURL;
      console.log(res);
    })
   }
   
   logInWithTwitter(){
    this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(res =>{
      this.userLogged.logged=true;
      this.userLogged.name = res.user.displayName;
      this.userLogged.email = res.user.email;
      this.userLogged.profilepicture = res.user.photoURL;
      console.log(res);
    })
   }
}
