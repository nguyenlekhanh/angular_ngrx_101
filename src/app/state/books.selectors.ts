import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

//contain book list from google (calling from app.component.ts ngOnInit)
export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

//contain bookid collection from user (calling from AddBook button)
export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

//return book from bookid collection from user base on book list from google
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);