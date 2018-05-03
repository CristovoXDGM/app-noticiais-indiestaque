
import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  key:string = 'username';
   userLogged =  
     {
      logged:false,
      name:'',
      email:'',
       profilepicture:''
     }
   
  constructor(public  fire:AngularFireAuth,public navCtrl: NavController, public viewCTRL: ViewController,params: NavParams) {
     
    }
    goTocadastrar(){
      this.navCtrl.push(CadastrarPage);
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
      this.fire.auth.signOut();
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
