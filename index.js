#!/usr/bin/env node

const links = [
  { title: 'Twitter', url: 'beis.io/twitter' },
  { title: 'Instagram', url: 'beis.io/insta' },
]

const longestTitleLength = links
  .map((link) => link.title)
  .reduce((longest, current) => {
    return longest.length > current.length ? longest : current.length
  }, 0)

links.forEach((link) => {
  console.log(
    `${link.title.padEnd(longestTitleLength, ' ')} -> https://${link.url}`
  )
})
