import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElecPage } from './elec.page';
import { ElecPageRoutingModule } from './elec-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ElecPageRoutingModule, SharedModule],
  declarations: [ElecPage],
})
export class ElecPageModule {}
