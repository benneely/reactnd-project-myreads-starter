import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book';

class ListBooks extends React.Component{
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.reviewedBooks.filter((data) => data.shelf==='currentlyReading').map((book) => {
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
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.reviewedBooks.filter((data) => data.shelf==='wantToRead').map((book) => {
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
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.reviewedBooks.filter((data) => data.shelf==='read').map((book) => {
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
                </div>
                </div>
                <Link to='/search' className="open-search">Add Contact</Link>
            </div>
        )
    }
}

export default ListBooks