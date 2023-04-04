import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'about',
        loadChildren: () =>
          import('./about-page/about-page.module').then(m => m.AboutPageModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
