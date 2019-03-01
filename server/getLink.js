const axios = require('axios')
const cheerio = require('cheerio')

const getBukkitHtml = () => axios('http://bukk.it')

const getLink = async res => {
  const { data: html } = await getBukkitHtml()
  const $ = cheerio.load(html)

  const links = $('td a')
  const index = Math.floor(Math.random() * links.length)
  const randomLink = links.get(index)
  const name = randomLink.attribs.href

  const url = `http://bukk.it/${name}`

  res.end(JSON.stringify({ url, name }))
}

module.exports = getLink
