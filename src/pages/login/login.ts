import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth'
 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   facebookLogged =  
     {
      logged:false,
      name:'',
      email:'',
       profilepicture:''
     }
   
  constructor(public  fire:AngularFireAuth,public navCtrl: NavController, public viewCTRL: ViewController) {
  
    }
    goTocadastrar(){
      this.navCtrl.push(CadastrarPage);
    }

   logInWithfacebook(){
      this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res =>{
        //this.navCtrl.setRoot(NoticiasPage);
        this.facebookLogged.logged=true;
        this.facebookLogged.name = res.user.displayName;
        this.facebookLogged.email = res.user.email;
        this.facebookLogged.profilepicture = res.user.photoURL;
        console.log(res);
      })
    }
   logOutofFacebook(){
      this.fire.auth.signOut();
      this.facebookLogged.logged  = false;
    }
  
}
