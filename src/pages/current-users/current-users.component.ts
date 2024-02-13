import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users, UsersState } from './../../user.state';
import { Store, select } from '@ngrx/store';
import * as users from '../../users.selectors';
import { getUsers, next, previous } from '../../actions/users.actions';
import { LoaderService } from '../../services/loader.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-current-users',
  templateUrl: './current-users.component.html',
  styleUrls: ['./current-users.component.css'],
})
export class CurrentUsersComponent implements OnInit {
  pagesize: number;
  constructor(
    private _store: Store<UsersState>,
    private _userService: UsersService,
    private _loader: LoaderService
  ) {}
  loading$: Subject<boolean> = this._loader.isLoading$;
  //loading$ = this._loader.isLoading$;
  public users: Users[];
  public response: any;
  Object = Object;
  public evilResponseProps: any;
  ngOnInit() {
    this._store.pipe(select(users.getPagesize)).subscribe((pagesize) => {
      this.pagesize = pagesize;
    });
    this._store.dispatch(getUsers({ pagesize: this.pagesize }));
    this._store.pipe(select(users.getUsersData)).subscribe((userData) => {
      console.log(userData, 'user');
      this.response = userData;
      this.evilResponseProps = this.response['results'];
      this.users = this.evilResponseProps;
      console.log(this.users, 'goof');
      // this.evilResponseProps = Object.values(this.response);
      // this.users = this.evilResponseProps[0];
      // console.log(this.evilResponseProps, 'goof');
    });
  }

  previous_users() {
    this._store.dispatch(previous({ pagesize: this.pagesize }));
  }
  next_users() {
    this._store.dispatch(next({ pagesize: this.pagesize }));
  }
}
