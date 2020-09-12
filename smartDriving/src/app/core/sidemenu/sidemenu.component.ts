import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Sessione di guida',
      url: '/sd/sessione',
      icon: 'mail'
    },
    {
      title: 'Profilo',
      url: '/sd/profilo',
      icon: 'paper-plane'
    },
    {
      title: 'Shop',
      url: '/sd/shop',
      icon: 'heart'
    },
    {
      title: 'Drive Pass',
      url: '/sd/drivePass',
      icon: 'archive'
    },
    {
      title: 'Regolamento',
      url: '/sd/regolamento',
      icon: 'trash'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

}
