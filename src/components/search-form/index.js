// Search form component
// =====================

import React from 'react'
import style from './index.scss'
import cx from 'classnames'
import ResultsList from './results-list'
import EventBus from '../event-bus'

export default class SearchForm extends React.Component {
  constructor(options = {}) {
    super(options)
    this.onClickToggleForm = this.onClickToggleForm.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = { expanded: true, results: [] }
  }

  onClickToggleForm() {
    this.setState({ expanded: !this.state.expanded })
  }

  onSubmit(event) {
    event.preventDefault()
    EventBus.broadcast('search:perform', this.refs.searchField.value)
  }

  render() {
    let className
    if (this.state.expanded && this.state.results.length) {
      className = style.SearchFormExpandedWithResults
    } else if (this.state.expanded) {
      className = style.SearchFormExpanded
    } else {
      className = style.SearchForm
    }

    return <div className={className}>
      <form className={style.form} onSubmit={this.onSubmit}>
        <button
          className={style.button}
          type="button"
          onClick={this.onClickToggleForm}>
          <i className={`icon icon-search ${style.icon}`}  />
        </button>
        <input
          className={style.searchField}
          type="text"
          ref="searchField"
          placeholder="Wikipedia search" />
      </form>
      <ResultsList />
    </div>
  }
}
