// Search form component
// =====================

import React from 'react'
import style from './index.scss'
import cx from 'classnames'
import ResultsList from './results-list'

export default class SearchForm extends React.Component {
  constructor(options = {}) {
    super(options)
    this.onClickToggleForm = this.onClickToggleForm.bind(this)
    this.state = { expanded: true }
  }

  onClickToggleForm() {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    let className
    if (this.state.expanded && this.props.results.length) {
      className = style.SearchFormExpandedWithResults
    } else if (this.state.expanded) {
      className = style.SearchFormExpanded
    } else {
      className = style.SearchForm
    }

    return <div className={className}>
      <form className={style.form}>
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
      <ResultsList results={this.props.results} />
    </div>
  }
}

SearchForm.propTypes = {
  results: React.PropTypes.array.isRequired
}
