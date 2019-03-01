const getLink = require('./server/getLink')
const servePublic = require('./server/servePublic')
const serveHtml = require('./server/serveHtml')

module.exports = async (req, res) => {
  if (req.url.includes('assets')) {
    const assetName = req.url.replace('/assets/', '')

    servePublic(assetName, res)
    return
  }

  if (req.url.includes('get-link')) {
    getLink(res)
    return
  }

  serveHtml(res)
}
