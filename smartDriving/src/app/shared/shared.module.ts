import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderStatsComponent } from './header-stats/header-stats.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderStatsComponent
  ],
  exports: [
    HeaderComponent,
    HeaderStatsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
