import style from './BookForms.module.css';

import React, { Component } from 'react';

export default class BookForms extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    genre: '',
    favourite: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    const bookData = {
      title: this.state.title,
      author: this.state.author,
      year: Number.parseInt(this.state.year),
      genre: this.state.genre,
      favourite: this.state.favourite,
      cover: 'https://images.gr-assets.com/books/1320399351l/1885.jpg',
    };
  };

  handleChange = event => {
    // event.target.name - "author"
    if (event.target.type === 'checkbox') {
      this.setState({
        [event.target.name]: event.target.checked,
      });
      return;
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {' '}
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Author
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Year
            <input
              type="number"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Genre
            <input
              type="text"
              name="genre"
              value={this.state.genre}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Favorite
            <input
              type="checkbox"
              name="favourite"
              checked={this.state.favourite}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add to books list</button>
        </form>
      </div>
    );
  }
}
