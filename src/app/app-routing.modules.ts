import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'platrerie',
    loadChildren: () =>
      import('./platrerie/platrerie.module').then((m) => m.PlatreriePageModule),
  },
  {
    path: 'electricite',
    loadChildren: () =>
      import('./elec/elec.module').then((m) => m.ElecPageModule),
  },
  {
    path: 'peinture',
    loadChildren: () =>
      import('./peinture/peinture.module').then((m) => m.PeinturePageModule),
  },
  {
    path: 'enSavoirPlus',
    loadChildren: () =>
      import('./enSavoirPlus/enSavoirPlus.module').then(
        (m) => m.EnSavoirPlusPageModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home', // Default URL for showcase purposes
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
