import React, { Component } from 'react';
import BookForms from './BookForms/BookForms';
import BookList from './BookList/BookList';
import booksData from '../db/books.json'

export class App extends Component {
  state={
    books:booksData.books,
    
  }
  render() {
    return (
      <div>
        <BookForms />
        <BookList booksMarkup={this.state.books}/>
      </div>
    );
  }
}
