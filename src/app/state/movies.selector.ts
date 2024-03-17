import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieModel } from "../model/movie";

const getmoviestate = createFeatureSelector<MovieModel>('movies');

export const getMovieList = createSelector(getmoviestate, (state) => {
    return state.list;
})