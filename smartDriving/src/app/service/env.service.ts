import { Injectable } from '@angular/core';
import { Card } from 'src/interface/card'

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  baseUrl = 'http://localhost:8100/'

  menuSections : Card[] = [
    {
      title: 'Sessione di guida',
      description: 'Completa nuove sessioni di guida per salire di livello!',
      urlImg: 'mail'
    },
    {
      title: 'Profilo',
      description: 'Osserva gli obiettivi raggiunti e gestisci il tuo garage!',
      urlImg: 'mail'
    },
    {
      title: 'Shop',
      description: 'Acquista nuove skin e progetti per il tuo garage',
      urlImg: 'mail'
    },
    {
      title: 'Drive pass',
      description: 'Ottieni nuovi premi avanzando di livello',
      urlImg: 'mail'
    },
    {
      title: 'Regolamento',
      description: 'Scopri come guadagnare punti',
      urlImg: 'mail'
    }
  ];

  constructor() { }
}
