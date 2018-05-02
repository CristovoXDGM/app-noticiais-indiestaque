

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { IndiesDoMomentoPage } from '../pages/indies-do-momento/indies-do-momento';
import { TrailersPage } from '../pages/trailers/trailers';
import { IndiesExclusivosPage } from '../pages/indies-exclusivos/indies-exclusivos';
import { OpEsPage } from '../pages/opcoes/opcoes';

 
import { NoticiasPage } from '../pages/noticias/noticias';
import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from './../providers/database/database';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
   
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = null;
  
  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen , dbProvider:DatabaseProvider) {
    platform.ready().then(() => {
         
      statusBar.backgroundColorByHexString('#000000');
      splashScreen.hide();
      
      dbProvider.createDatabase()
      .then(()=>{
        this.openHomePage(splashScreen);
      })
      .catch(()=>{
        this.openHomePage(splashScreen);
      })
    });
     
  }
//alterações 
private openHomePage(splashScreen: SplashScreen ){
 splashScreen.hide();
 this.rootPage = NoticiasPage;
}
 
//apenas pra separar
  goToNoticias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NoticiasPage);
  }goToIndiesDoMomento(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IndiesDoMomentoPage);
  }goToTrailers(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TrailersPage);
  }goToIndiesExclusivos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IndiesExclusivosPage);
  }goToOpEs(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OpEsPage);
  }goToLogin(){
    this.navCtrl.push(LoginPage)
   
  }
  
  
}
