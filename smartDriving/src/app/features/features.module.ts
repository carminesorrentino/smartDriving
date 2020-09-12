import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ThumbnailLoadingComponent } from './thumbnail-loading/thumbnail-loading.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
    ThumbnailLoadingComponent,
    FirstPageComponent
  ],
  exports: [
    MenuComponent,
    ThumbnailLoadingComponent,
    FirstPageComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class FeaturesModule { }
