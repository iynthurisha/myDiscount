import { Magasin } from "../models/Magasin";
import { Code } from "../models/Code";
import { Subject } from "rxjs/Subject";

import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


export class MagasinsService {

    magasins$ = new Subject<Magasin[]>();
    code$ = new Subject<Code[]>();



    magasinsList: Magasin[] = [
        {
            name: 'Adidas',
            logo: '../../assets/imgs/Adidaslogo.png',
            website: 'https://Adidas.com'

        },

        {
            name: 'Bershka',
            logo: '../../assets/imgs/Bershkalogo.png',
            website: 'http://www.bershka.fr'

        },

        {
            name: 'Boss',
            logo: '../../assets/imgs/Bosslogo.png',
            website: 'http://www.hugoboss.com/fr'
        }
    ];

    //////////////////////////////////////////////////////////////////////////////////////////////////////


    codesList: Code[] = [
        {
            colname: 'Adidas',
            promotions: [
                {
                    codepromo: 'ADCODE5',
                    image: '../../assets/imgs/Adidas1.png',
                    description: 'reduc 5% pour un achat de 10€',
                    isOnFav: true
                },


                {
                    codepromo: 'ADCODE10',
                    image: '../../assets/imgs/Adidas1.png',
                    description: 'reduc 10% pour un achat de 10€',
                    isOnFav: false
                },
                {
                    codepromo: 'ADCODEfree',
                    image: '../../assets/imgs/Adidas2.png',
                    description: 'reduc free pour un achat de 10€',
                    isOnFav: true
                },
                {
                    codepromo: 'ADCODE1+1=3',
                    image: '../../assets/imgs/Adidas3.png',
                    description: 'reduc 3 pour deux achat',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'BSK',
            promotions: [
                {
                    codepromo: 'BSKCODE5',
                    image: '../../assets/imgs/BSKlogo.png',
                    description: 'reduc 5% pour un achat de 10€',
                    isOnFav: true
                },
                {
                    codepromo: 'BSKCODE10',
                    image: '../../assets/imgs/BSKlogo.png',
                    description: 'reduc 10% pour un achat de 10€',
                    isOnFav: false
                },
                {
                    codepromo: 'BSKCODEFREE',
                    image: '../../assets/imgs/BSKlogo.png',
                    description: 'reduc FREE pour un achat de 10€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'BOSS',
            promotions: [
                {
                    codepromo: 'BOSSCODE5',
                    image: '../../assets/imgs/BOSSlogo.png',
                    description: 'reduc 5% pour un achat de 10€',
                    isOnFav: false
                },
                {
                    codepromo: 'BOSSCODE10',
                    image: '../../assets/imgs/BOSSlogo.png',
                    description: 'reduc 10% pour un achat de 10€',
                    isOnFav: false
                },
                {
                    codepromo: 'BOSSCODEFREE',
                    image: '../../assets/imgs/BOSSlogo.png',
                    description: 'reduc FREE pour un achat de 10€',
                    isOnFav: false
                }
            ]
        }
    ];

    ////////////////////////////////

    emitMagasins() {
        this.magasins$.next(this.magasinsList.slice());
        this.code$.next(this.codesList.slice());
    }

    saveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('magasins').set(this.magasinsList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('magasins').once('value').then(
                (data: DataSnapshot) => {
                    this.magasinsList = data.val(); this.emitMagasins();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    saveDataC() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('code').set(this.codesList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    retrieveDataC() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('code').once('value').then(
                (data: DataSnapshot) => {
                    this.codesList = data.val(); this.emitMagasins();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }
}