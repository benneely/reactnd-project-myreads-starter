import React from 'react'
import './App.css'
import {getAll, update} from './BooksAPI';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import Search from './Search';

class BooksApp extends React.Component {
  
  state = {
    reviewedBooks: [],
    showSearchPage: false
  }

  componentDidMount() {
    getAll().then((result) => {
      this.setState({reviewedBooks: result});
    });
  }

  changeShelf = (book, shelfName) => {
    update(book, shelfName).then((result) => {
      book.shelf = shelfName
      const newreviewedBooks = this.state.reviewedBooks.filter((nbook) => {return nbook.id !== book.id}).concat(book)
      this.setState((currentState) => ({
        reviewedBooks: newreviewedBooks
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <Search />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks reviewedBooks={this.state.reviewedBooks} handleChange={this.changeShelf}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
