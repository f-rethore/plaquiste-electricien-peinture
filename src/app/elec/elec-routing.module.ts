import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElecPage } from './elec.page';

const routes: Routes = [
  {
    path: '',
    component: ElecPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElecPageRoutingModule {}
