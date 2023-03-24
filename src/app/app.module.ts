import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AppCounterService } from './services/app-counter.service';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CounterComponent],
  imports: [BrowserModule],
  providers: [AppCounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
