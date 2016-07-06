// Main app container
// ==================

import React from 'react'
import style from './index.scss'
import Book from '../book'
import SearchForm from '../search-form'

export default class App extends React.Component {
  render() {
    return <div className={style.App}>
      <SearchForm />
      <Book />
    </div>
  }
}
