import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';
import { BodyCounterComponent } from './components/body-counter/body-counter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CounterComponent, BodyCounterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
