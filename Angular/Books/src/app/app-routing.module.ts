import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import * as fromBooks from './books';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        children: [
            {
                path: '',
                component: fromBooks.BookListComponent,
            },
            {
                path: 'new', //books/new
                component: fromBooks.BookNewComponent,
            },
            {
                path: ':novel_id', //books/novel_id
                component: fromBooks.BookDetailsComponent,
            },
        ],
    },  
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {
        enableTracing: !environment.production,
    })],
    exports: [RouterModule]
})

export class AppRoutingModule {}