import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GalleryModule } from '../pages/gallery/gallery.module';
import { AboutModule } from '../pages/about/about.module';
import { HomeModule } from '../pages/home/home.module';
import { CurrentUsersModule } from '../pages/current-users/current-users.module';
import { ContactUsModule } from '../pages/contact-us/contact-us.module';
import { LoginComponent } from '../pages/auth/login/login.component';
import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../pages/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../pages/about/about.module').then((m) => m.AboutModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('../pages/gallery/gallery.module').then((m) => m.GalleryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'current-users',
    loadChildren: () =>
      import('../pages/current-users/current-users.module').then(
        (m) => m.CurrentUsersModule
      ),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    CommonModule,
    GalleryModule,
    AboutModule,
    HomeModule,
    CurrentUsersModule,
    ContactUsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
})
export class AppRoutingModule {}
