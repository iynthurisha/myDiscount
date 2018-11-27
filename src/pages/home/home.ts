import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MagasinsPage } from '../magasins/magasins';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private menuCtrl: MenuController) {
  }

  onGoToMagasins() {
    this.navCtrl.push(MagasinsPage);
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
