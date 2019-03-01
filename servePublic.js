const { send } = require('micro')
const fs = require('fs')
const path = require('path')

const servePublic = (assetName, res) => {
  try {
    const file = fs.readFileSync(path.resolve(__dirname, 'public', assetName))

    res.end(file)
  } catch (err) {
    send(res, 404, 'cannot find file')
  }
}

module.exports = servePublic
