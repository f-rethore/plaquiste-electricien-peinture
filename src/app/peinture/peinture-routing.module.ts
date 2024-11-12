import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeinturePage } from './peinture.page';

const routes: Routes = [
  {
    path: '',
    component: PeinturePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeinturePageRoutingModule {}
