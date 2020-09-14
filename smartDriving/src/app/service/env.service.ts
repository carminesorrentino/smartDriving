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
      urlImg: '/assets/img/sessione.png',
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
      urlImg: '/assets/img/shop.jpg',
      icon: 'pricetags',
      url: '/sd/shop'
    },
    {
      title: 'Drive pass',
      description: 'Ottieni nuovi premi avanzando di livello',
      urlImg: '/assets/img/drivepass.png',
      icon: 'trending-up',
      url: '/sd/drivePass'
    },
    {
      title: 'Regolamento',
      description: 'Scopri come guadagnare punti',
      urlImg: '/assets/img/regolamento.jpeg',
      icon: 'receipt',
      url: '/sd/regolamento'
    }
  ];

  startAppThumbnail : string = 'url("../../../../img/thumbnailLoading.jpg") no-repeat center center / cover';
  loginThubmnail : string = 'url("../../../../img/thumbnailLogin.jpg") no-repeat center center / cover';

  constructor() { }
}
