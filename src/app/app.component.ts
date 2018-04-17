
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { IndiesDoMomentoPage } from '../pages/indies-do-momento/indies-do-momento';
import { TrailersPage } from '../pages/trailers/trailers';
import { IndiesExclusivosPage } from '../pages/indies-exclusivos/indies-exclusivos';
import { OpEsPage } from '../pages/opcoes/opcoes';


import { NoticiasPage } from '../pages/noticias/noticias';
import { LoginPage } from '../pages/login/login';
 



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = NoticiasPage;

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 

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
