import React from 'react'
import './App.css'
import {getAll} from './BooksAPI';
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
      console.log(result)
      this.setState((currentState) => {
        currentState.reviewedBooks = result
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <Search />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks reviewedBooks={this.state.reviewedBooks}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
