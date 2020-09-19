import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss'],
})
export class RegistrazioneComponent implements OnInit {

  user : {
    nome : string,
    cognome : string,
    username : string,
    citta : string,
    tipo: string,
    password : string,
    confermaPassword : string
  }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  daysOptions = {
    cssClass: 'my-class'
  }

  constructor() { }

  ngOnInit() {}

  submitRegistrazione(){
    console.log('submit signin form')
  }

  

}
