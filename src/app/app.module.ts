import { QuartaNoticiaaPage } from './../pages/quarta-noticiaa/quarta-noticiaa';
import { SegundaNoticiaaPage } from './../pages/segunda-noticiaa/segunda-noticiaa';
import { PrimeiraNoticiaPage } from './../pages/primeira-noticia/primeira-noticia';

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NoticiasPage } from '../pages/noticias/noticias';
import { IndiesDoMomentoPage } from '../pages/indies-do-momento/indies-do-momento';
import { TrailersPage } from '../pages/trailers/trailers';
import { IndiesExclusivosPage } from '../pages/indies-exclusivos/indies-exclusivos';
import { NotificaEsPage } from '../pages/notifica-es/notifica-es';
import { OpEsPage } from '../pages/opcoes/opcoes';
import { LoginPage } from '../pages/login/login';
import { CadastrarPage } from '../pages/cadastrar/cadastrar';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverComponent } from '../components/popover/popover';
import { TerceiraNoticiaaPage } from '../pages/terceira-noticiaa/terceira-noticiaa';
import { Push  } from '@ionic-native/push';
 
@NgModule({
  declarations: [
    MyApp,
    NoticiasPage,
    IndiesDoMomentoPage,
    TrailersPage,
    IndiesExclusivosPage,
    NotificaEsPage,
    OpEsPage,
    LoginPage,
    CadastrarPage,
    PopoverComponent,
    PrimeiraNoticiaPage,
    SegundaNoticiaaPage,
    TerceiraNoticiaaPage,
    QuartaNoticiaaPage
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NoticiasPage,
    IndiesDoMomentoPage,
    TrailersPage,
    IndiesExclusivosPage,
    NotificaEsPage,
    OpEsPage,
    LoginPage,
    CadastrarPage,
    PopoverComponent,
    PrimeiraNoticiaPage,
    SegundaNoticiaaPage,
    TerceiraNoticiaaPage,
    QuartaNoticiaaPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push
  ]
})
export class AppModule {}