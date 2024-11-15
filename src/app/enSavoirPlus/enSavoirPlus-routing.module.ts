import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnSavoirPlusPage } from './enSavoirPlus.page';

const routes: Routes = [
  {
    path: '',
    component: EnSavoirPlusPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnSavoirPlusPageRoutingModule {}
