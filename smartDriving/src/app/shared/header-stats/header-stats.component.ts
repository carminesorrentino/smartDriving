import { Component, OnInit } from '@angular/core';
import { AlertController, IonicSafeString } from '@ionic/angular';

@Component({
  selector: 'app-header-stats',
  templateUrl: './header-stats.component.html',
  styleUrls: ['./header-stats.component.scss'],
})
export class HeaderStatsComponent implements OnInit {

  constructor(public alertController : AlertController) { }
    
    async presentAlert() {
      const alert = await this.alertController.create({
        cssClass: '--height: 500px',
        header: 'Statistiche giocatore',
        subHeader: '',
        message: new IonicSafeString(`
                <ion-item>
                  <ion-label>Livello: 0/100<ion-label>
                  <ion-icon name="cash-outline"></ion-icon>
                </ion-item>
                <ion-item>
                  <ion-label>ACPoint: 0<ion-label>
                  <ion-img src="" alt="path in header-stats.component.ts" class="iconStats"></ion-img>
                </ion-item>
                <ion-item>
                  <ion-label>Tickets: 0<ion-label>
                  <ion-img src="" alt="path in header-stats.component.ts" class="iconStats"></ion-img>
                </ion-item>'
        `),
        buttons: ['OK']
      });
  
      await alert.present();
    }

  ngOnInit() {}

}
