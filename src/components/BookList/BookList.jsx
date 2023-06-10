import React, { Component } from 'react';

import { ReactComponent as IconHeart } from '../../heart.svg';

import style from './BookList.module.css';

export default class BookList extends Component {
  render() {
    const { booksMarkup } = this.props;
    return (
      <div>
        <ul className={style.booksList}>
          {booksMarkup.map(book => {
            return (
              <li key={book.id} className={style.booksItem}>
                <img src={book.cover} alt={book.title} />
                <div className={style.booksContent}>
                  <h2>{book.title}</h2>
                  <h3>{book.author}</h3>
                  <p>{book.year}</p>
                  <p>{book.genre}</p>
                </div>
                <button className={style.bookFav}>
                  <IconHeart
                    className={`${style.iconHeart} ${
                      book.favourite ? style.fav : ''
                    }`}
                  />
                </button>
                <button className={style.bookRemove}>&times;</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
