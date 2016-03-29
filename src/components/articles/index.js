// Article
// =======

import faker from 'faker'

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

let articles = [
  randomArticle(),
  randomArticle(),
  randomArticle()
]

export default articles
