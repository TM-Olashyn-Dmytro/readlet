// Search component
// ================
//
// The thing that actually performs a request and gets results.

import { randomArticle } from '../articles'

export default function query(string) {
  return [
    randomArticle(),
    randomArticle(),
    randomArticle(),
    randomArticle(),
    randomArticle(),
    randomArticle()
  ]
}
