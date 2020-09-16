import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './features/index/index.component';
import { LoginComponent } from './features/login/login.component';
import { MenuComponent } from './features/menu/menu.component';
import { ThumbnailLoadingComponent } from './features/thumbnail-loading/thumbnail-loading.component';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('../app/features/index/index.module').then(m => m.IndexModule) },
  { path: '', redirectTo:'/index', pathMatch:'full' },
  { path: 'sd/menu', component: MenuComponent },
  { path: 'sd/sessione', component: MenuComponent },
  { path: 'sd/profilo', component: MenuComponent },
  { path: 'sd/shop', component: MenuComponent },
  { path: 'sd/drivePass', component: MenuComponent },
  { path: 'sd/regolamento', component: MenuComponent },
  { path: 'sd/login', component: LoginComponent },
  { path: 'sd/registrazione', component: ThumbnailLoadingComponent },
  { path: '**', redirectTo:"index" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}