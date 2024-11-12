import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeinturePage } from './peinture.page';
import { PeinturePageRoutingModule } from './peinture-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, PeinturePageRoutingModule, SharedModule],
  declarations: [PeinturePage],
})
export class PeinturePageModule {}
