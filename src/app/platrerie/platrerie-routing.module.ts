import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatreriePage } from './platrerie.page';

const routes: Routes = [
  {
    path: '',
    component: PlatreriePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatreriePageRoutingModule {}
