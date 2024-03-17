import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../services/movies.service';
import { loadMovies, loadMoviesFail, loadMoviesSuccess } from './movies.actions';
import { Movie } from '../model/movie';

// exhaustMap((action) => this.moviesService.getAll()
//       .pipe(
//         map((movies) => {loadMoviesSuccess({ list: movies })},
//         catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
//       ))
//     )

// = createEffect(() => this.actions$.pipe(
//     ofType(loadMovies),
//     exhaustMap((action) => {
//         return this.moviesService.getAll().pipe(
//             map((data:any) => {
//                 return loadMoviesSuccess({ list: data })
//             }),
//             catchError((_err) => of(loadMoviesFail())
//         )
//     })
//   ));
@Injectable()
export class MoviesEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadMovies),
        exhaustMap((action) => {
            return this.moviesService.getAll().pipe(
                map((data:any) => {
                    return loadMoviesSuccess({ list: data })
                }),
                catchError((_err) => of(loadMoviesFail()))
            )
        })
    )
    );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}