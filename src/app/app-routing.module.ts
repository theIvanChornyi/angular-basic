import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

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
>>>>>>> 2a9dcf7 (initial commit)
