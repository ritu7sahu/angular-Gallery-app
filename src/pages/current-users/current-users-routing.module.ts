import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentUsersComponent } from './current-users.component';
import { RouterModule, Routes } from '@angular/router';
import { AddressCardComponent } from '../library/address-card/address-card.component';
const routes: Routes = [
  {
    path: 'current-users',
    component: CurrentUsersComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CurrentUsersComponent, AddressCardComponent],
  exports: [RouterModule],
})
export class CurrentUsersRoutingModule {}
