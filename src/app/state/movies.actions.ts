import { createAction, props } from "@ngrx/store"
import { Movie } from "../model/movie"

export const GET_MOVIES = '[Movies Page] Load Movies'
export const GET_MOVIES_SUCCESS = '[Movies API] Movies Loaded Success'
export const GET_MOVIES_FAIL = '[Movies API] Movies Loaded Error'

export const loadMovies = createAction(GET_MOVIES)
export const loadMoviesSuccess = createAction(GET_MOVIES_SUCCESS, props<{ list: Movie[] }>())
export const loadMoviesFail = createAction(GET_MOVIES_FAIL)