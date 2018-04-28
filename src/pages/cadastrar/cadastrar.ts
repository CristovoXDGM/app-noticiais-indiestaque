import { Component, ViewChild } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastrar',
  templateUrl: 'cadastrar.html'
})
export class CadastrarPage {

  @ViewChild ('fullName') fullName;
  @ViewChild ('user') user;
  @ViewChild ('password') password;
  @ViewChild ('confirmPassword') confirmPassword;

  constructor(public navCtrl: NavController, public viewCtrl:ViewController, private database:DatabaseProvider, public alertCrl:AlertController) {
  }


  CreateUser(){
    if(this.password == this.confirmPassword){
      this.database.CreateUser(this.user,this.fullName,this.password).then((data)=>{
        console.log(data);
      }, (error)=>{
        console.log(error);
      });
    }else{
      
      let senhaDiferente = this.alertCrl.create(
        {
          title:'Senha diferente!!',
          message:'Por favor verificar se as senhas digitadas estão iguais',
          buttons:[{
            text:'ok',
            handler:data=>{
              this.viewCtrl.dismiss();
            }
          }]
        });
        senhaDiferente.present();
      }
  }
    
}
  

