import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Users } from '../user.state';

@Injectable()
export class UsersService {
  constructor(private _http: HttpClient) {}
  getUsers(pageSize: number): Observable<any> {
    //getImages(): Observable<any> {
    let _url = 'https://randomuser.me/api/?results=' + pageSize;
    console.log(_url);
    //let _url = 'https://picsum.photos/v2/list?page=1&limit=30';
    //console.log('pagesize', pageSize, 'offset', offset);
    return this._http.get<Users[]>(_url).pipe(
      map((data: any) => {
        let usersData = [];

        usersData = data;
        if (usersData.length > 30) {
          //this.pagecount = this.pagecount + 1;
          return usersData.slice(usersData.length - 30, 0);
        } else {
          return usersData;
        }
      }),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
