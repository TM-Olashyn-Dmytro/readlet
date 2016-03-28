// Article component
// =================

import React from 'react'
import style from './index.scss'

export default class Article extends React.Component {
  render() {
    return <article className={style.Article} key={this.props.article.id}>
      <header>
        <h1 className={style.title}>{this.props.article.title}</h1>
        <div className={style.textWrapper}>
          {this.props.article.text}
        </div>
      </header>
    </article>
  }
}

Article.propTypes = {
  id: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  text: React.PropTypes.string
}

Article.defaultProps = {
  title: '[Untitled]'
}
