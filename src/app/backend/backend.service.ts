import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';
import Recommendation from '../recommendation/recommendation.model';

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

  getRecommendations(payload) {
      return this.http.post(`${environment.apiEndpoint}/recommendation`, payload, { headers }).pipe(
          map(data => plainToClass<Recommendation, any>(Recommendation, data)),
          retry(3),
          catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Something bad happened. :(');
  }
}
