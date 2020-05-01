import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'X-Api-Request': 'true',
  Accept: 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves data and catches errors from provided endpoint
   * @param dataType data type class same as generic
   * @param endpoint without backslashes
   */
  getData<T>(dataType: any, endpoint: string) {
    return this.http
      .get<T>(`${environment.apiEndpoint}/${endpoint}`, { headers })
      .pipe(
        map((data) => plainToClass<T, any>(dataType, data)),
        retry(3),
        catchError(this.handleError)
      );
  }

  /**
   * Retrieves data array and catches errors from provided endpoint
   * @param dataType data type class same as generic
   * @param endpoint without backslashes
   */
  getDataArray<T>(dataType: any, endpoint: string) {
    return this.http
      .get<T[]>(`${environment.apiEndpoint}/${endpoint}`, { headers })
      .pipe(
        map((data) => plainToClass<T[], any>(dataType, data)),
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
