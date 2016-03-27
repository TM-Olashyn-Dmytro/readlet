// Article component
// =================

import React from 'react'
import style from './index.scss'

export default class Article extends React.Component {
  render() {
    return <article className={style.Article}>
      <header>
        <h1>{this.props.title}</h1>
        <div className={style.textWrapper}>
          {this.props.text}
        </div>
      </header>
    </article>
  }
}

Article.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string
}

Article.defaultProps = {
  title: '[Untitled]'
}
