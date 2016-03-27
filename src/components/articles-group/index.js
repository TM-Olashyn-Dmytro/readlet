// Articles group component
// ========================

import React from 'react'
import style from './index.scss'
import Article from '../article'

export default class ArticlesGroup extends React.Component {
  render() {
    return <div className={style.ArticlesGroup}>
      {this.props.articles.map(article => {
        return <Article article={article} />
      })}
    </div>
  }
}

ArticlesGroup.propTypes = {
  articles: React.PropTypes.array.isRequired
}
