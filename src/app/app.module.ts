import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MagasinsPage } from '../pages/magasins/magasins';
import { SingleMagasinPage } from '../pages/single-magasin/single-magasin';
import { MagasinsService } from '../services/magasins.service';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AuthPage } from '../pages/auth/auth';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MagasinsPage,
    SingleMagasinPage,
    FavoritesPage,
    AuthPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MagasinsPage,
    SingleMagasinPage,
    FavoritesPage,
    AuthPage
  ],
  providers: [
    MagasinsService,
    AuthService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
