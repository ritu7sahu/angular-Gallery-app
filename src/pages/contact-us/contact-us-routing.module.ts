import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'contact',
    component: ContactUsComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ContactUsComponent],
})
export class ContactUsRoutingModule {}
