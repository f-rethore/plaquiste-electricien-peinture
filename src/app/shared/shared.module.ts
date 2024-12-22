// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuTabComponent } from '../components/menu-tab/menu-tab.component';
import { BeforeAfterComponent } from '../components/before-after/before-after.component';

// Modules

// Directives

// Pipes

// Modals

// Components

const MODULES = [CommonModule, RouterModule];

//const PIPES = [TruncatePipe, SortPipe, TimePipe, DateToSincePipe, StripTagsPipe, AbsPipe, DayTranslatedPipe];

const COMPONENTS = [MenuTabComponent, BeforeAfterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  //providers: [...PIPES, DatePipe],
  imports: [...MODULES],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    //   ...DIRECTIVES,

    //   ...PIPES,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
