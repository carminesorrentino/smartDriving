import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ThumbnailLoadingComponent } from '../thumbnail-loading/thumbnail-loading.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegistrazioneComponent } from '../registrazione/registrazione.component';

const routes : Routes = [
    { path: '', component: IndexComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'registrazione', component: RegistrazioneComponent}
    ]}
]

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    RegistrazioneComponent
  ],
  exports: [
    IndexComponent,
    LoginComponent,
    RegistrazioneComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class IndexModule { }
