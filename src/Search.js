import React from 'react'
import { Link } from 'react-router-dom'
import {search} from './BooksAPI';
import Book from './Book';

class Search extends React.Component {

  state = {
    queriedBooks: [],
    query: ''
  }

  getResults = (term) => {
    console.log(term)

    this.setState({
      query: term
    })
    
    if (!term) {
      this.setState({queriedBooks: []})
      return 
    }


    this.state.query.length>0 && search(this.state.query).then((result) => {
      this.setState({
        queriedBooks: result
      })
    })

  }


  render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Go Back</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(event) => {
                        this.getResults(event.target.value)
                    }}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              {this.state.queriedBooks.length>0 && this.state.queriedBooks.map((book) => {
                            return (
                                <Book 
                                    key={book.id}
                                    BookMetadata={book}
                                    handleChange={this.props.handleChange}
                                />
                            )
                        })}
            </div>
          </div>
        )
    }
}

export default Search