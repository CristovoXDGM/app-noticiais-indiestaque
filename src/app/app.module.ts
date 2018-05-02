
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

//imports externos

import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PopoverComponent } from '../components/popover/popover';
import { TerceiraNoticiaaPage } from '../pages/terceira-noticiaa/terceira-noticiaa';
import { Push  } from '@ionic-native/push';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { FirebaseCredentials } from './app.firebase.provider';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';
import { CreateUserProvider } from '../providers/create-user/create-user';
import { EditUsersPage } from './../pages/edit-users/edit-users';
//autenticação do facebook com firebase

 
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
    QuartaNoticiaaPage,
    EditUsersPage
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FirebaseCredentials),
    IonicStorageModule.forRoot()
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
    QuartaNoticiaaPage,
    EditUsersPage
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Push,
    Camera,
    SQLite,
    DatabaseProvider,
    CreateUserProvider 
    
  ]
})
export class AppModule {}