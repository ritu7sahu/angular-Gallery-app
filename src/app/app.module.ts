import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from '../pages/top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageDataService } from '../services/image-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightMenuDirective } from '../pages/library/highlight-menu.directive';
import { ImageTransformDirective } from '../pages/library/image-transform.directive';
import { imagesReducer } from '../reducers/image-data.reducers';
import { usersReducer } from '../reducers/users.reducers';
import { StoreModule } from '@ngrx/store';
import { ImageDataEffects } from './../image-data.effects';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '../interceptor/loader.interceptor';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Images } from '../image.state';
import { UsersService } from '../services/users.service';
import { UsersEffects } from './../users.effects';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../pages/auth/login/login.component';
import { AuthGuard } from '../guard/auth.guard';
import { LoaderService } from '../services/loader.service';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({}),
    RouterModule.forRoot([{ path: '', component: ProductListComponent }]),
    StoreModule.forRoot({ images: imagesReducer, users: usersReducer }),
    EffectsModule.forRoot([ImageDataEffects, UsersEffects]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HighlightMenuDirective,
    ImageTransformDirective,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    ImageDataService,
    AuthGuard,
    UsersService,
    AuthService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
