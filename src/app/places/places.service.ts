import { inject, Injectable, signal } from '@angular/core';

import { Place } from './place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { ErrorService } from '../shared/error.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);
  private errorService = inject(ErrorService);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching available places. Please try again later!',
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching your favorite places. Please try again later!',
    ).pipe(
      tap({
        next: (places) => {
          this.userPlaces.set(places);
        },
      }),
    );
  }

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient
      .put<{ userPlaces: Place[] }>(`http://localhost:3000/user-places`, {
        placeId: placeId,
      })
      .pipe(
        tap({
          next: (respBody) => this.userPlaces.set(respBody.userPlaces)
        }),
        catchError(() => {
          return throwError(
            () => {
              this.errorService.showError(
                'Something went wrong adding the place to your favorites. Please try again later!'
              );
              return new Error(
                'Something went wrong adding the place to your favorites. Please try again later!'
              );
            }
          );
        })
      );
  }

  removeUserPlace(placeId: string) {
    return this.httpClient
      .delete<{ userPlaces: Place[] }>(`http://localhost:3000/user-places/${placeId}`)
      .pipe(
        tap({
          next: (resBody) => this.userPlaces.set(resBody.userPlaces)
        }),
        catchError(() => {
          return throwError(
            () =>  {
              this.errorService.showError(
                'Something went wrong. Please try deleting later!'
              );
              return new Error('Something went wrong. Please try deleting later!');
            }
          );
        }),
      );
  }

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resBody) => resBody.places),
      catchError(() => {
        return throwError(() => new Error(errorMessage));
      }),
    );
  }
}
