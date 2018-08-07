import { Product } from '../product';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        title: "Yoga Blocks",
        price: 29.99,
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhBnT4JpswI8Ndhg0eaJVvzgEWDA1v3ouCi1-APWHR5QpTEn4'
    },
    {
        id: 2,
        title: "Yoga Mat", 
        price: 99.99,
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJW4w7GcQV045WySlm1VqPmZ3NvFYvVIInoC7iYrrDSNO0xZdjAA'
    },
    {
        id: 3,
        title: "Swell Water Bottle", 
        price: 39.99,
        imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLzvhpHGsflTkxhP_uaMIo6hfMcUG4-TlMZ_E3Sfkah1EsL1V'
    }
];

function randomId(): number{
    return Math.floor(Math.random()*1000);
}