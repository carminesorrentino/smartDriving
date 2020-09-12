import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu.component';

const routes: Routes = [
  {
    path: '',
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
    path: '**',
    redirectTo: 'sd/regolamento'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}