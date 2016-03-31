// Article
// =======

import faker from 'faker'
import {
  fetchPage,
  pageToArticle,
  performSearch,
  searchResultsToArticles
} from '../wikipedia-api'
import EventBus from '../event-bus'

EventBus.subscribe('article:fetch', onFetchArticle)
EventBus.subscribe('search:perform', onSearchPerform)

function onFetchArticle(name) {
  fetchArticle(name)
}

function onSearchPerform(query) {
  search(query, {
    success: (articles) => {
      EventBus.broadcast('search:success', articles)
    }
  })
}

function randomParagraphCount() {
  return Math.random() * (13 - 3) + 3
}

export function randomArticle() {
  return {
    id: faker.random.number(),
    title: faker.lorem.words(),
    text: faker.lorem.paragraphs(randomParagraphCount())
  }
}

function fetchArticle(name) {
  fetchPage(name, {
    success: (response) => {
      articles.push(pageToArticle(response))
      EventBus.broadcast('article:add', articles)
    }
  })
}

function search(string) {
  performSearch(string, {
    success: (response) => {
      EventBus.broadcast('search:success', searchResultsToArticles(response))
    }
  })
}

let articles = []

export default articles
