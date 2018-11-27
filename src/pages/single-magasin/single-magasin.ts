import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Magasin } from '../../models/Magasin';
import { MagasinsService } from '../../services/magasins.service';
import { Code } from '../../models/Code';
import { Promo } from '../../models/Promo';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-single-magasin',
  templateUrl: 'single-magasin.html',
})
export class SingleMagasinPage implements OnInit {

  index: number;
  magasin: Magasin;
  code: Code;

  //////////////////////////

  codeList: Code[];
  codesSubscription: Subscription;

  //////////////////

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    public magasinsService: MagasinsService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.magasin = this.magasinsService.magasinsList[this.index];
    this.code = this.magasinsService.codesList[this.index];

    //subscription
    this.codesSubscription = this.magasinsService.code$.subscribe(
      (code: Code[]) => {
        this.codeList = code;
      }
    );
    this.magasinsService.emitMagasins();
  }

  dismissModal() {
    this.viewCtrl.dismiss();

  }

  /** BUTTONS  **/

  onShowCodes(line, magasin) {
    let alert = this.alertCtrl.create({
      title: 'Voici le code promotionnel !',
      subTitle: 'Veuillez entrer le code suivant lors de votre prochaine achat sur le site.' + line.codepromo,
      buttons: [
        {
          text: 'Fermer',
          handler: () => console.log('Fermer !')
        },
        {
          text: 'Voir le site',
          handler: () => window.open(magasin.website, '_blank')
        }
      ]
    });
    alert.present();
  }


  onAddFav(line: Promo) {
    let text = line.isOnFav ?
      "Code was removed from your favorite" :
      "Code was added successfully in favorite";

    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    line.isOnFav = !line.isOnFav;

    this.magasinsService.saveDataC().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: text,
          duration: 3000,
          position: 'bottom'
        }).present();
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

  /*
   ngOnDestroy() {
     this.codesSubscription.unsubscribe();
   }
   */

}
