import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types'


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
                                    BookMetadata={book}
                                    handleChange={props.handleChange}
                                />
                            )
                        })}
                    </ol>
                </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default BookShelf