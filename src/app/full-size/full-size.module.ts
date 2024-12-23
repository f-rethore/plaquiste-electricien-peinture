import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullSizePage } from './full-size.page';
import { FullSizePageRoutingModule } from './full-size-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, FullSizePageRoutingModule, SharedModule],
  declarations: [FullSizePage],
})
export class FullSizePageModule {}
