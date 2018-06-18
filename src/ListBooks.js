import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class ListBooks extends React.Component{

    render() {
        const currentlyReading = this.props.reviewedBooks.filter((data) => data.shelf==='currentlyReading')
        const wantToRead = this.props.reviewedBooks.filter((data) => data.shelf==='wantToRead')
        const alreadyRead = this.props.reviewedBooks.filter((data) => data.shelf==='read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf books={currentlyReading} title='Currently Reading'/>
                    <BookShelf books={wantToRead} title='Want to Read'/>
                    <BookShelf books={alreadyRead} title='Read'/>
                </div>
                <Link to='/search' className="open-search">Add Contact</Link>
            </div>
        )
    }
}

export default ListBooks