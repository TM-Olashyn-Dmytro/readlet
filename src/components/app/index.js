// Main app container
// ==================

import React from 'react'
import style from './index.scss'
import ArticlesGroup from '../articles-group'
import faker from 'faker'

let mockArticles = [
  {
    id: faker.random.number(),
    title: faker.lorem.words(),
    text: faker.lorem.paragraphs()
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(),
    text: faker.lorem.paragraphs()
  },
  {
    id: faker.random.number(),
    title: faker.lorem.words(),
    text: faker.lorem.paragraphs()
  }
]

export default class App extends React.Component {
  render() {
    return <div className={style.App}>
      <ArticlesGroup articles={mockArticles} />
    </div>
  }
}
