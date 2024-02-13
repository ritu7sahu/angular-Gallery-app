import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ImageDataService {
  public startcount: number;
  public pagecount: number;
  constructor(private _http: HttpClient) {}

  getImages(pageSize: number, offset: number): Observable<any> {
    //getImages(): Observable<any> {
    let _url =
      'https://picsum.photos/v2/list?page=' + pageSize + '&limit=' + offset;
    console.log(_url);
    //let _url = 'https://picsum.photos/v2/list?page=1&limit=30';
    //console.log('pagesize', pageSize, 'offset', offset);
    return this._http.get(_url).pipe(
      map((data: any) => {
        let imagesData = [];

        imagesData = data;
        if (imagesData.length > 30) {
          this.pagecount = this.pagecount + 1;
          return imagesData.slice(imagesData.length - 30, 0);
        } else {
          return imagesData;
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
