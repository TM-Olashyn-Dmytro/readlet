// Search results list component
// =============================

import React from 'react'
import style from './index.scss'

export default class ResultsList extends React.Component {
  render() {
    return <ul className={style.resultsList}>
      {this.props.results.map(result => {
        return <li
          className={style.resultsListEntry}
          key={result.id}>
          {result.title}
        </li>
      })}
    </ul>
  }
}

ResultsList.propTypes = {
  results: React.PropTypes.array.isRequired
}
