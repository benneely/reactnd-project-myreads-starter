import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

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
                    <BookShelf books={currentlyReading} handleChange={this.props.handleChange} title='Currently Reading'/>
                    <BookShelf books={wantToRead} handleChange={this.props.handleChange} title='Want to Read'/>
                    <BookShelf books={alreadyRead} handleChange={this.props.handleChange} title='Read'/>
                </div>
                <Link to='/search' className="open-search">Add Contact</Link>
            </div>
        )
    }
}

ListBooks.propTypes = {
    reviewedBooks: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ListBooks