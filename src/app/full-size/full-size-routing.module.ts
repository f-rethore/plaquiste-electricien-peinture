import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullSizePage } from './full-size.page';

const routes: Routes = [
  {
    path: '',
    component: FullSizePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullSizePageRoutingModule {}
