import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Section } from 'src/interface/section';
import { EnvService } from '../../service/env.service'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {

  public selectedIndex = 0;
  public appPages : Section[] = [];

  constructor(private service : EnvService, private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.appPages = service.menuSections;
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
