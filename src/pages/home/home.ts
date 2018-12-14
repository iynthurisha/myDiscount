import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MagasinsPage } from '../magasins/magasins';
import { MagasinsService } from '../../services/magasins.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    private menuCtrl: MenuController,
    private magasinsService: MagasinsService) {
  }

  onGoToMagasins() {
    this.navCtrl.push(MagasinsPage);
    this.magasinsService.retrieveDataC();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
