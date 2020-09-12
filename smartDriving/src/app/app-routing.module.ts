import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './features/first-page/first-page.component';
import { MenuComponent } from './features/menu/menu.component';
import { ThumbnailLoadingComponent } from './features/thumbnail-loading/thumbnail-loading.component';

const routes: Routes = [
  {
    path: 'sd/menu',
    component: MenuComponent
  },
  {
    path: 'sd/sessione',
    component: MenuComponent
  },
  {
    path: 'sd/profilo',
    component: MenuComponent
  },
  {
    path: 'sd/shop',
    component: MenuComponent
  },
  {
    path: 'sd/drivePass',
    component: MenuComponent
  },
  {
    path: 'sd/regolamento',
    component: MenuComponent
  },
  {
    path: 'sd/login',
    component: MenuComponent
  },
  {
    path: 'sd/registrazione',
    component: ThumbnailLoadingComponent
  },
  {
    path: '**',
    component: FirstPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}