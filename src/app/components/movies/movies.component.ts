import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../model/movie';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { loadMovies } from '../../state/movies.actions';
import { getMovieList } from '../../state/movies.selector';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  // movies$: Observable<Movie[]> = this.store.select(state => state.movies);
  movieData!: Movie[];
  
  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {
      console.log('a1');
      this.store.dispatch(loadMovies());
      console.log('a2');

      //this.movies$.subscribe((movie:any) => console.log(movie));

      this.store.select(getMovieList).subscribe((items) => {
        console.log('abc');
        console.log(items);
        this.movieData = items;
        // this.customerData = item;
        // console.log(this.customerData);
        // this.datasource = new MatTableDataSource(this.customerData);
      })

  }

  
}
