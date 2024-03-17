
import { createReducer, on } from "@ngrx/store";
import { MovieModel } from "../model/movie";
import { loadMoviesSuccess } from "./movies.actions";

const moiveState : MovieModel = {
    list: [],
    errormessage: '',
}

const _MoviesReducer = createReducer(moiveState,
    on(loadMoviesSuccess, (state, action) => {
        return {
            ...state,
            list: action.list,
            errormessage: ''
        }
    }),
)


export function MoviesReducer(state: any, action: any) {
    return _MoviesReducer(state, action)
}