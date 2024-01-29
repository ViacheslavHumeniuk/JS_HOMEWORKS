'use strict'

const parseUrl = function (url) {
  const urlObject = new URL(window.location.href)

  return {
    protocol: urlObject.protocol,
    host: urlObject.host,
    pathname: urlObject.pathname,
    search: urlObject.search,
    origin: urlObject.origin
  }
}
const url = 'https://example.com:8080/path/name?query=123#hash'
const urlObject = parseUrl(url)
console.log(parseUrl(url))
