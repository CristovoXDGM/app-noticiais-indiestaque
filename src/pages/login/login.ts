import { CadastrarPage } from './../cadastrar/cadastrar';
import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  
  
  

    }
    goTocadastrar(){
      this.navCtrl.push(CadastrarPage);
    }
  
}
