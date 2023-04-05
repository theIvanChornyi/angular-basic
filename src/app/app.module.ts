import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './components/modal/modal.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ModalComponent, BackdropComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
