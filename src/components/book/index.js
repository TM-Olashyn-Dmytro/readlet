// Book component
// ==============

import React from 'react'
import style from './index.scss'
import Sheet from '../sheet'

export default class Book extends React.Component {
  render() {
    return <div className={style.Book}>
      {this.props.articles.map(article => {
        return <Sheet article={article} />
      })}
    </div>
  }
}

Book.propTypes = {
  articles: React.PropTypes.array.isRequired
}
