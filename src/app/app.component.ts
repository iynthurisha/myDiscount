import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { MagasinsPage } from '../pages/magasins/magasins';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AuthPage } from '../pages/auth/auth';
import { MagasinsService } from '../services/magasins.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  homePage: any = HomePage;
  magasinsPage: any = MagasinsPage;
  favoritesPage: any = FavoritesPage;
  authPage: any = AuthPage;

  @ViewChild('content') content: NavController;

  isAuth: boolean;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private magasinsService: MagasinsService) {
    platform.ready().then(() => {

      let config = {
        apiKey: "AIzaSyDzg5hjVpG93qkioFi6p9W5CJAsOZG-Xs8",
        authDomain: "mydiscount-ce4f4.firebaseapp.com",
        databaseURL: "https://mydiscount-ce4f4.firebaseio.com",
        projectId: "mydiscount-ce4f4",
        storageBucket: "mydiscount-ce4f4.appspot.com",
        messagingSenderId: "759571956069"
      };

      firebase.initializeApp(config);

      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(HomePage);
          } else {
            this.isAuth = false;
            this.content.setRoot(AuthPage, { mode: 'connect' });
          }
        }
      );

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
    this.magasinsService.retrieveDataC();
    
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuCtrl.close();
  }
}

