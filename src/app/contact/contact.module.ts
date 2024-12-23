import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPage } from './contact.page';
import { ContactPageRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, ContactPageRoutingModule, SharedModule],
  declarations: [ContactPage],
})
export class ContactPageModule {}
