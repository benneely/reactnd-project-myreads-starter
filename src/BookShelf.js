import React from 'react';
import Book from './Book';

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {props.books.map((book) => {
                            return (
                                <Book 
                                    key={book.id}
                                    BookTitle={book.title}
                                    BookAuthor={book.authors[0]}
                                    BookImageURL={`url(${book.imageLinks.thumbnail})`}
                                />
                            )
                        })}
                    </ol>
                </div>
        </div>
    )
}

export default BookShelf