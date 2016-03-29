// Search form component
// =====================

import React from 'react'
import style from './index.scss'
import cx from 'classnames'

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
    let className = this.state.expanded ?
      style.SearchFormExpanded :
      style.SearchForm

    return <form className={className}>
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
  }
}
