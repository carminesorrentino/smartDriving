import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderStatsComponent } from './header-stats/header-stats.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderStatsComponent,
    CardComponent
  ],
  exports: [
    HeaderComponent,
    HeaderStatsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
