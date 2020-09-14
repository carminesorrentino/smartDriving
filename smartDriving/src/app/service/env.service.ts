import { Injectable } from '@angular/core';
import { Section } from 'src/interface/section'

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  loginUrl = 'sd/login';
  registrazioneUrl = 'sd/registrazione';

  baseUrl = 'http://localhost:8100/'

  menuSections : Section[] = [
    {
      title: 'Sessione di guida',
      description: 'Completa nuove sessioni di guida per salire di livello!',
      urlImg: 'https://www.tourtools.it/sites/www.tourtools.it/files/social/twitter/instagram_guida_alle_dimensioni_delle_immagini_2020/tw_dimensioni-immagini.jpg',
      icon: 'car',
      url: '/sd/sessione'
    },
    {
      title: 'Profilo',
      description: 'Osserva gli obiettivi raggiunti e gestisci il tuo garage!',
      urlImg: '/assets/img/profilo.jpg',
      icon: 'person',
      url: '/sd/profilo'
    },
    {
      title: 'Shop',
      description: 'Acquista nuove skin e progetti per il tuo garage',
      urlImg: 'mail',
      icon: 'pricetags',
      url: '/sd/shop'
    },
    {
      title: 'Drive pass',
      description: 'Ottieni nuovi premi avanzando di livello',
      urlImg: 'mail',
      icon: 'trending-up',
      url: '/sd/drivePass'
    },
    {
      title: 'Regolamento',
      description: 'Scopri come guadagnare punti',
      urlImg: 'mail',
      icon: 'receipt',
      url: '/sd/regolamento'
    }
  ];

  startAppThumbnail : string = 'url("../../../../img/thumbnailLoading.jpg") no-repeat center center / cover';
  loginThubmnail : string = 'url("../../../../img/thumbnailLogin.jpg") no-repeat center center / cover';

  constructor() { }
}
