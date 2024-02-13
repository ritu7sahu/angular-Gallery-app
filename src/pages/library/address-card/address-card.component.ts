import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { Users } from '../../../user.state';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent implements OnInit {
  @Input() users: any;

  constructor(private _loader: LoaderService) {}
  //loading$ = this._loader.isLoading$;
  ngOnInit() {
    console.log(this.users, 'sss');
  }
}
