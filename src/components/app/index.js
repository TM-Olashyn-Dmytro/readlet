// Main app container
// ==================

import React from 'react'
import style from './index.scss'
import Book from '../book'
import SearchForm from '../search-form'
import articles from '../articles'

export default class App extends React.Component {
  render() {
    return <div className={style.App}>
      <SearchForm />
      <Book articles={articles} />
    </div>
  }
}
