import { Component } from '@angular/core';
import { EnvService } from 'src/app/service/env.service';
import { Card } from 'src/interface/card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent{

  menuSections : Card[] = [];

  constructor(service : EnvService){
    this.menuSections = service.menuSections;
  }


}
