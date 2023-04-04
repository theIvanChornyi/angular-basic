import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PostComponent } from './components/post/post.component';
import { AboutExtraComponent } from './components/about-extra/about-extra.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { canActivateChildrenGuard, canActivateGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'about',
        component: AboutComponent,
        canActivateChild: [canActivateChildrenGuard],
        children: [{ path: 'extra', component: AboutExtraComponent }],
    },
    {
        path: 'posts',
        component: PostsComponent,
        canActivate: [canActivateGuard],
    },
    {
        path: 'posts/:id',
        component: PostComponent,
        canActivate: [canActivateGuard],
    },
    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: '/error' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
