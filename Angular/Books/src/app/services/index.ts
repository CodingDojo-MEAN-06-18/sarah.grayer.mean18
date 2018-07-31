import {BookService} from './book.service';

export const services: any[] = [BookService]; //now can access an array of books, comment on books, etc.
export * from './book.service'; 