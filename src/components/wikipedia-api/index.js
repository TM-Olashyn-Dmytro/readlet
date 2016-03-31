// Wikipedia API module
// ====================

import jsonp from './jsonp'

function pageUrl(name) {
  return `
    http://en.wikipedia.org/w/api.php?
    action=parse&page=${name}&format=json&
    prop=text|displaytitle|revid&mobileformat=html
  `.trim().replace(/\n/, '')
}

function searchUrl(query) {
  return `
    http://en.wikipedia.org/w/api.php?
    action=query&list=search&srsearch=${query}&format=json&srlimit=10
  `.trim().replace(/\n/, '')
}

export function fetchPage(name, options = {}) {
  jsonp(Object.assign({}, { url: pageUrl(name) }, options))
}

export function performSearch(query, options = {}) {
  jsonp(Object.assign({}, { url: searchUrl(query) }, options))
}

export function pageToArticle(rawArticle) {
  return {
    title: rawArticle.parse.displaytitle,
    text: rawArticle.parse.text['*'],
    snippet: null
  }
}

export function searchResultToArticle(rawResult) {
  return {
    title: rawResult.title,
    text: null,
    snippet: rawResult.snippet
  }
}

export function searchResultsToArticles(response) {
  return response.query.search.map(searchResultToArticle)
}
