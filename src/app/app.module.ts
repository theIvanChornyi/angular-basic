import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleDirective } from './directive/style.directive';
import { ClickStyleDirective } from './directive/click-style.directive';
import { HostBindingDirective } from './directive/host-binding.directive';
import { StructureDirective } from './directive/structure.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ClickStyleDirective,
    HostBindingDirective,
    StructureDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
