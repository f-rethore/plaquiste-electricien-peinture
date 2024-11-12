import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatreriePage } from './platrerie.page';
import { PlatreriePageRoutingModule } from './platrerie-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, PlatreriePageRoutingModule, SharedModule],
  declarations: [PlatreriePage],
})
export class PlatreriePageModule {}
