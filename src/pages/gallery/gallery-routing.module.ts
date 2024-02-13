import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageCardComponent } from '../library/image-card/image-card.component';

const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [GalleryComponent, ImageCardComponent],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
