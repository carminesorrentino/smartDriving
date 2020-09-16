import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { ThumbnailLoadingComponent } from './thumbnail-loading/thumbnail-loading.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [
    MenuComponent,
    ThumbnailLoadingComponent,
  ],
  exports: [
    MenuComponent,
    ThumbnailLoadingComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    IndexModule
  ]
})
export class FeaturesModule { }
