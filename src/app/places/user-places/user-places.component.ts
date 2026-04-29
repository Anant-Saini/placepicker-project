import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model'; 
import { catchError, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {

  private placesService = inject(PlacesService);
  private destroyRef = inject(DestroyRef);

  favPlaces = this.placesService.loadedUserPlaces;
  isFetching = signal(false);
  error = signal<string>('');

  ngOnInit() {
    this.isFetching.set(true);
    this.updatefavPlaces();
    
  }

  updatefavPlaces() {
    const subscription = this.placesService.loadUserPlaces().subscribe({
      error: (error: Error) => {
        this.error.set(error.message);
      },
      complete: () => {
        this.isFetching.set(false);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onDeletePlace(selectedPlace: Place) {
    const subscription = this.placesService
      .removeUserPlace(selectedPlace.id)
      .subscribe({
        next: (resBody) => {
          console.log('Deletion Sucessful');
        },
        error: (error: Error) => {
          this.error.set(error.message);
        },
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
