import { Component } from '@angular/core';
import { ModalController, MenuController,// ToastController, LoadingController 
} from 'ionic-angular';
import { SingleMagasinPage } from '../single-magasin/single-magasin';
import { Magasin } from '../../models/Magasin';
import { MagasinsService } from '../../services/magasins.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-magasins',
  templateUrl: 'magasins.html'
})

export class MagasinsPage {

  magasinsList: Magasin[];
  magasinsSubscription: Subscription;
  SingleMagasinPage: any;


  constructor(private modalCtrl: ModalController,
    private magasinsService: MagasinsService,
    private menuCtrl: MenuController,
   // private toastCtrl: ToastController,
    //private loadingCtrl: LoadingController
    ) { }



  /*
  ionViewWillEnter() {
    // this.magasinsList = magasinsService.magasinsList.slice();
    this.magasinsList = MagasinsService.magasinsList.slice();
  }
  */

  ngOnInit() {
    this.magasinsSubscription = this.magasinsService.magasins$.subscribe(
      (magasins: Magasin[]) => {
        this.magasinsList = magasins; //=magasins.slice();
      }
    );
    this.magasinsService.emitMagasins();
  }

  onLoadMagasin(index: number) {
    let modal = this.modalCtrl.create(SingleMagasinPage, { index: index });
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  
  //** SAVE MAGASIN DATA ONLY **//
/*
  onSaveList() {
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours…'
    });
    loader.present();
    this.magasinsService.saveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
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

  onFetchList() {
    let loader = this.loadingCtrl.create({
      content: 'Récuperation en cours…'
    });
    loader.present();
    this.magasinsService.retrieveData().then(
      () => {
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées !',
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

  ngOnDestroy() {
    this.magasinsSubscription.unsubscribe();

  }
  */

}
