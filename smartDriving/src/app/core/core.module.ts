import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../features/menu/menu.component';



@NgModule({
  declarations: [
    SidemenuComponent,
  ],
  exports: [
    SidemenuComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path:'',component: MenuComponent }
    ]),
  ]
})
export class CoreModule { }
