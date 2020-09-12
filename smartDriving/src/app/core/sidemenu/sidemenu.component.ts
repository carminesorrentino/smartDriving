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
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Profilo',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Shop',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Drive Pass',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Regolamento',
      url: '/folder/Trash',
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
    const path = window.location.pathname.split('folder/')[1];
    console.log(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
