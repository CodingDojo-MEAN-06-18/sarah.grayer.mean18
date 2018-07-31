app.html
-references list.html


new.html:
-form to submit new novel
-pass through $event as ngForm

new.ts:
-import Output, EventEmitter, NgForm, Book
-define novel as new Book()
-@Output decorater defines newBook as new EventEmitter<Book>(), sends info to be used in other components
-onSubmit() emits the newBook (this.newBook.emit(this.novel); this.novel= new Book())



list.html:
-references new.html (form)
-loops through novels with *ngFor='let novel of books'
-loop includes (click)='onSelect(novel)' to listen for click event and perfomr onSelect()
-references details.html (<app-book-details [novel]='selectedBook'></app-book-details> --> passes in novel for @Input in details.ts)

list.ts:
-imports Book, BOOKS (sample data)
-defines books as Array<Book>=BOOKS (or could use [] instead of BOOKS sample data)
-defines selectedBook type as Book
-onSelect method defines this.selectedBook as novel passed in, or null if same as selected 
-onCreate method adds novel passed from form to books array
*Don't need to use @Input here, as info is all stored in books[]. @Input used to show info as updated (clicking updates what is in the selectedBook variable)



details.html:
-shows details of selected book w/*ngIf='novel'

details.ts:
-imports Input, Book
-@Input decorator giving novel type Book, receives info (@Input() novel: Book)