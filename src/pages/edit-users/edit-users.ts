import { Component } from '@angular/core';
import {  NavController, NavParams,ToastController } from 'ionic-angular';
import { CreateUserProvider,usuarios } from './../../providers/create-user/create-user';
@Component({
  selector: 'page-edit-users',
  templateUrl: 'edit-users.html',
})
export class EditUsersPage {
  model:usuarios;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private toastCTRL:ToastController,
     private userProvider:CreateUserProvider
 
    ) 
    {
      this.model = new usuarios();
      if(this.navParams.data.id){
        this.userProvider.get(this.navParams.data.id)
        .then((result:any)=>{
          this.model = result;
        })
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditUsersPage');
  }

  save(){
    this.saveUsers()
    .then(()=>{
      this.toastCTRL.create({ message: 'usuario salvo.', duration: 3000, position: 'botton' }).present();
      this.navCtrl.pop();
      
    })
    .catch(() => {
      this.toastCTRL.create({ message: 'Erro ao salvar o usuario.', duration: 3000, position: 'botton' }).present();
    });
  }

  private saveUsers(){
    if(this.model.id){
      return this.userProvider.update(this.model);
       
    } else{
      return this.userProvider.insert(this.model);
    }
  }

}
