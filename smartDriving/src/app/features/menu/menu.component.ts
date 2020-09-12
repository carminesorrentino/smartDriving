import { Component } from '@angular/core';
import { EnvService } from 'src/app/service/env.service';
import { Section } from 'src/interface/section';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent{

  menuSections : Section[] = [];

  constructor(service : EnvService){
    this.menuSections = service.menuSections;
  }


}
