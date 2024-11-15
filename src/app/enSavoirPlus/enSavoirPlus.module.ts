import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnSavoirPlusPage } from './enSavoirPlus.page';
import { EnSavoirPlusPageRoutingModule } from './enSavoirPlus-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, EnSavoirPlusPageRoutingModule, SharedModule],
  declarations: [EnSavoirPlusPage],
})
export class EnSavoirPlusPageModule {}
