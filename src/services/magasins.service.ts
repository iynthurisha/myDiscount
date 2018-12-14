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
            logo: '../../assets/imgs/LogoAdidas.png',
            website: 'https://Adidas.com'

        },
        {
            name: 'Bershka',
            logo: '../../assets/imgs/logoBershka.png',
            website: 'http://www.bershka.fr'

        },
        {
            name: 'Boss',
            logo: '../../assets/imgs/logoBoss.jpg',
            website: 'http://www.hugoboss.com/fr'
        },
        {
            name: 'Chanel',
            logo: '../../assets/imgs/logoChanel.png',
            website: 'http://www.Chanel.com/fr'
        },
        {
            name: 'Dior',
            logo: '../../assets/imgs/logoDior.png',
            website: 'https://www.dior.com'
        },
        {
            name: 'Gucci',
            logo: '../../assets/imgs/logoGucci.png',
            website: 'https://www.gucci.com'
        },
        {
            name: 'Guess',
            logo: '../../assets/imgs/logoGuess.jpg',
            website: 'https://www.guess.eu'
        },
        {
            name: 'Nike',
            logo: '../../assets/imgs/logoNike.jpg',
            website: 'http://www.nike.com/fr'
        },
        {
            name: 'Prada',
            logo: '../../assets/imgs/logoPrada.jpg',
            website: 'https://www.prada.com'
        },
        {
            name: 'Versace',
            logo: '../../assets/imgs/logoVersace.png',
            website: 'https://www.versace.com'
        },
        {
            name: 'Yves Saint Laurent',
            logo: '../../assets/imgs/logoYSL.png',
            website: 'https://www.ysl.com'
        }
    ];

    //////////////////////////////////////////////////////////////////////////////////////////////////////


    codesList: Code[] = [
        {
            colname: 'Adidas',
            promotions: [
                {
                    codepromo: 'ADCODE5',
                    image: '../../assets/imgs/adidas5.jpg',
                    description: '5% de reduction pour un achat de 25€',
                    isOnFav: true
                },
                {
                    codepromo: 'ADCODE10',
                    image: '../../assets/imgs/adidas10.jpg',
                    description: '10% de reduction pour un achat de 45€',
                    isOnFav: false
                },
                {
                    codepromo: 'ADCODE15',
                    image: '../../assets/imgs/adidas15.jpg',
                    description: '15% de reduction pour un achat de 75€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'BSK',
            promotions: [
                {
                    codepromo: 'BSKCODE5',
                    image: '../../assets/imgs/bershka5.jpg',
                    description: '5% de reduction pour un achat de 20€',
                    isOnFav: false
                },
                {
                    codepromo: 'BSKCODE10',
                    image: '../../assets/imgs/bershka10.jpg',
                    description: '10% de reduction pour un achat de 45€',
                    isOnFav: false
                },
                {
                    codepromo: 'BSKCODE15',
                    image: '../../assets/imgs/Bershka15.jpg',
                    description: '15% de reduction pour un achat de 60€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'BOSS',
            promotions: [
                {
                    codepromo: 'BOSSCODE5',
                    image: '../../assets/imgs/Boss5.jpg',
                    description: '5% de reduction pour un achat de 80€',
                    isOnFav: false
                },
                {
                    codepromo: 'BOSSCODE10',
                    image: '../../assets/imgs/Boss10.jpg',
                    description: '10% de reduction pour un achat de 100€',
                    isOnFav: false
                },
                {
                    codepromo: 'BOSSCODE15',
                    image: '../../assets/imgs/Boss15.jpg',
                    description: '15% de reduction pour un achat de 150€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'Chanel',
            promotions: [
                {
                    codepromo: 'CHANELCODE5',
                    image: '../../assets/imgs/Chanel5.jpg',
                    description: '5% de reduction pour un achat de 100€',
                    isOnFav: false
                },
                {
                    codepromo: 'CHANELCODE10',
                    image: '../../assets/imgs/Chanel10.jpg',
                    description: '10% de reduction pour un achat de 200€',
                    isOnFav: false
                },
                {
                    codepromo: 'CHANELCODE15',
                    image: '../../assets/imgs/Chanel15.jpg',
                    description: '15% de reduction pour un achat de 250€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'Dior',
            promotions: [
                {
                    codepromo: 'DIORCODE5',
                    image: '../../assets/imgs/Dior5.jpg',
                    description: '5% de reduction pour un achat de 100€',
                    isOnFav: false
                },
                {
                    codepromo: 'DIORCODE10',
                    image: '../../assets/imgs/Dior10.jpg',
                    description: '10% de reduction pour un achat de 250€',
                    isOnFav: false
                },
                {
                    codepromo: 'DIORCODE15',
                    image: '../../assets/imgs/Dior15.jpg',
                    description: '15% de reduction pour un achat de 250€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'Gucci',
            promotions: [
                {
                    codepromo: 'GUCCICODE5',
                    image: '../../assets/imgs/Gucci5.jpg',
                    description: '5% de reduction pour un achat de 180€',
                    isOnFav: false
                },
                {
                    codepromo: 'GUCCICODE10',
                    image: '../../assets/imgs/Gucci10.jpg',
                    description: '10% de reduction pour un achat de 250€',
                    isOnFav: false
                },
                {
                    codepromo: 'GUCCICODE15',
                    image: '../../assets/imgs/Gucci15.jpg',
                    description: '15% de reduction pour un achat de 300€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'Guess',
            promotions: [
                {
                    codepromo: 'GUESSCODE5',
                    image: '../../assets/imgs/Guess5.jpg',
                    description: '5% de reduction pour un achat de 99€',
                    isOnFav: false
                },
                {
                    codepromo: 'GUESSCODE10',
                    image: '../../assets/imgs/Guess10.jpg',
                    description: '10% de reduction pour un achat de 150€',
                    isOnFav: false
                },
                {
                    codepromo: 'GUESSCODE15',
                    image: '../../assets/imgs/Guess15.jpg',
                    description: '15% de reduction pour un achat de 300€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'NIKE',
            promotions: [
                {
                    codepromo: 'NIKECODE5',
                    image: '../../assets/imgs/Nike5.jpg',
                    description: '5% de reduction pour un achat de 25€',
                    isOnFav: false
                },
                {
                    codepromo: 'NIKECODE10',
                    image: '../../assets/imgs/Nike10.jpg',
                    description: '10% de reduction pour un achat de 45€',
                    isOnFav: false
                },
                {
                    codepromo: 'NIKECODE15',
                    image: '../../assets/imgs/Nike15.jpg',
                    description: '15% de reduction pour un achat de 85€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'PRADA',
            promotions: [
                {
                    codepromo: 'PRADACODE5',
                    image: '../../assets/imgs/Prada5.jpg',
                    description: '5% de reduction pour un achat de 100€',
                    isOnFav: false
                },
                {
                    codepromo: 'PRADACODE10',
                    image: '../../assets/imgs/Prada10.jpg',
                    description: '10% de reduction pour un achat de 200€',
                    isOnFav: false
                },
                {
                    codepromo: 'PRADACODE15',
                    image: '../../assets/imgs/Prada15.jpg',
                    description: '15% de reduction pour un achat de 300€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'VERSACE',
            promotions: [
                {
                    codepromo: 'VERSACECODE5',
                    image: '../../assets/imgs/Versace5.jpg',
                    description: '5% de reduction pour un achat de 150€',
                    isOnFav: false
                },
                {
                    codepromo: 'VERSACECODE10',
                    image: '../../assets/imgs/Versace10.jpg',
                    description: '10% de reduction pour un achat de 200€',
                    isOnFav: false
                },
                {
                    codepromo: 'VERSACECODE15',
                    image: '../../assets/imgs/Versace15.jpg',
                    description: '15% de reduction pour un achat de 300€',
                    isOnFav: false
                }
            ]
        },
        {
            colname: 'Yves Saint Lauren',
            promotions: [
                {
                    codepromo: 'YSLCODE5',
                    image: '../../assets/imgs/YSL5.jpg',
                    description: '5% de reduction pour un achat de 80€',
                    isOnFav: false
                },
                {
                    codepromo: 'YSLCODE10',
                    image: '../../assets/imgs/YSL10.jpg',
                    description: '10% de reduction pour un achat de 150€',
                    isOnFav: false
                },
                {
                    codepromo: 'YSLCODE15',
                    image: '../../assets/imgs/YSL15.jpg',
                    description: '15% de reduction pour un achat de 300€',
                    isOnFav: false
                }
            ]
        },
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
