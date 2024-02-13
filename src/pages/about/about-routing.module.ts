import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AboutComponent],
  exports: [RouterModule],
})
export class AboutRoutingModule { }