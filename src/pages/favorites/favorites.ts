import { NavController, MenuController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';
import { MagasinsService } from '../../services/magasins.service';
import { Promo } from '../../models/Promo';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  listpromo: Array<Promo>

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public magasinsService: MagasinsService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {

    this.listpromo = [];

    for (let code of this.magasinsService.codesList) {
      for (let promotion of code.promotions) {
        if (promotion.isOnFav)
          this.listpromo.push(promotion);
      }
    }
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  onShowCodes(line, magasin) {
    let alert = this.alertCtrl.create({
      title: 'Voici le code promotionnel !',
      subTitle: 'Veuillez entrer le code suivant lors de votre prochaine achat sur le site.' + line.codepromo,
      buttons: [
        {
          text: 'Ok',
          handler: () => console.log('Fermer !')
        }
        /*,
        {
          text: 'Voir le site',
          handler: () => window.open(magasin.website, '_blank')
        }*/
      ]
    });
    alert.present();
  }


  presentToast(line: Promo) {
    let text = line.isOnFav ?
      "Code was removed from your favorite" :
      "Code was added successfully in favorite";

    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();

    line.isOnFav = !line.isOnFav;
    this.navCtrl.setRoot(FavoritesPage);
    this.onSaveListC();

  }

  //** SAVE DATA **//

  onSaveListC() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.magasinsService.saveDataC().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }); //.present();
      },
      (error) => {
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    );

  }
}

