import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth'
import { NoticiasPage } from '../noticias/noticias';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public viewCTRL: ViewController) {
  
  
  

    }
    goTocadastrar(){
      this.navCtrl.push(CadastrarPage);
    }

    logInWithfacebook(){
      this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res =>{
        this.navCtrl.setRoot(NoticiasPage);
        
      })
    }
    logOutofFacebook(){
      this.fire.auth.signOut();
    }
  
}
