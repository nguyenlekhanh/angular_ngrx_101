import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './counter.reducer'
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { MoviesEffects } from './state/movies.effects';
import { MoviesReducer } from './state/movies.reducer';
import { UserActivityEffects } from './state/user-activity.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ 
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer,
      movies: MoviesReducer
    }),
    provideEffects(MoviesEffects, UserActivityEffects),
    provideHttpClient()
  ]
};
