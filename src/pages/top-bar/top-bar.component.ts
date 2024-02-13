import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private router: Router) {}
  public isLogin: any = false;
  ngOnInit() {
    this.isLogin = localStorage.getItem('is_login');
    console.log(this.isLogin);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('is_login');
    this.router.navigate(['/']);
    return true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
