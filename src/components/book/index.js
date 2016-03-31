// Book component
// ==============

import React from 'react'
import style from './index.scss'
import Sheet from '../sheet'
import articles from '../articles'
import EventBus from '../event-bus'

export default class Book extends React.Component {
  constructor(options = {}) {
    super(options)
    this.state = { articles: [] }
  }

  componentDidMount() {
    EventBus.subscribe('article:add', () => {
      this.setState({ articles: articles })
    })
  }

  render() {
    return <div className={style.Book}>
      {this.state.articles.map(article => {
        return <Sheet key={article.id} article={article} />
      })}
    </div>
  }
}
