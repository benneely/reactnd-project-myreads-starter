import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: props.BookMetadata.imageLinks && `url(${props.BookMetadata.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={props.BookMetadata.shelf} onChange={(event) => {
                        props.handleChange(props.BookMetadata, event.target.value)
                    }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{props.BookMetadata.title}</div>
                <div className="book-authors">{props.BookMetadata.authors && props.BookMetadata.authors[0]}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    BookMetadata: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
}
    
export default Book;