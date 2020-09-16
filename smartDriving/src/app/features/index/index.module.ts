import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ThumbnailLoadingComponent } from '../thumbnail-loading/thumbnail-loading.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent
  ],
  exports: [
    IndexComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: IndexComponent, children: [
          { path: 'login', component: LoginComponent },
          { path: 'registrazione', component: ThumbnailLoadingComponent /*registrazionecomponent */ }
      ]}
    ])
  ]
})
export class IndexModule { }
