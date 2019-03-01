const getLink = require('./getLink')
const servePublic = require('./servePublic')

module.exports = async (req, res) => {
  if (req.url.includes('assets')) {
    const assetName = req.url.replace('/assets/', '')

    servePublic(assetName, res)
    return
  }

  if (req.url.includes('get-link')) {
    const linkData = await getLink()
    res.end(JSON.stringify(linkData))

    return
  }

  const { url, name } = await getLink()

  res.end(`
  <head>
    <link rel="stylesheet" href="/assets/styles.css" />
    <script src="https://unpkg.com/mithril/mithril.js"></script>
  </head>

  <body>
    <script src="/assets/main.js"></script>
  </body>
  `)
}
