// Search results list component
// =============================

import React from 'react'
import style from './index.scss'
import { on, emit } from '../event-bus'

class ResultsListEntry extends React.Component {
  constructor(options = {}) {
    super(options)
    this.onClickEntry = this.onClickEntry.bind(this)
  }

  onClickEntry() {
    emit('article:fetch', this.props.result.title)
  }

  render() {
    return <li
      className={style.resultsListEntry}
      onClick={this.onClickEntry}
      key={`result-${this.props.index}`}>
      {this.props.result.title}
    </li>
  }
}

ResultsListEntry.propTypes = {
  result: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired
}

export default class ResultsList extends React.Component {
  constructor(options = {}) {
    super(options)
    this.state = { results: [] }
  }

  componentDidMount() {
    on('search:success', results => {
      this.setState({ results: results })
    })
  }

  render() {
    return <ul className={style.resultsList}>
      {this.state.results.map((result, index) => {
        return <ResultsListEntry result={result} index={index} />
      })}
    </ul>
  }
}
