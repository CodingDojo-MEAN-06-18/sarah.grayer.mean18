import { Book } from '../models/book'; //import type for data

export const BOOKS: Book[] = [ // const of type Book []. Will fill w/Book type objects
    {
        id: randomId(),
        title:'leviathan wakes',
        author: 'james s. a. corey',
        year: 2011,
        pages: 582,
        publisher: 'Orbit Books'
    },
    {
        id: randomId(),
        title:'foundation',
        author: 'isaac asimov',
        year: 1951,
        pages: 255,
        publisher: 'Gnome Press'
    },
    {
        id: randomId(),
        title:'slaughterhouse-five',
        author: 'kurt vonnegut',
        year: 1969,
        pages: 190,
        publisher: 'Delacorte Press'
    }
]; 

function randomId(): number{
    return Math.floor(Math.random()*1000);
}
