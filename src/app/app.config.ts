import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter.reducer'
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ 
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
    provideHttpClient()
  ]
};
