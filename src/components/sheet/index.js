// Sheet component
// ===============
//
// Or “article view”. Too cool to call it that, though.

import React from 'react'
import style from './index.scss'

export default class Sheet extends React.Component {
  render() {
    return <article className={style.Sheet} key={this.props.article.id}>
      <header>
        <h1 className={style.title}>{this.props.article.title}</h1>
        <div
          className={style.textWrapper}
          dangerouslySetInnerHTML={{ __html: this.props.article.text }} />
      </header>
    </article>
  }
}

Sheet.propTypes = {
  article: React.PropTypes.object
}

Sheet.defaultProps = {
  article: { title: '[Untitled]' }
}
