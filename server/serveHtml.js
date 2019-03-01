const html = `
<head>
  <link rel="stylesheet" href="/assets/styles.css" />
  <script src="https://unpkg.com/mithril/mithril.js"></script>
  <title>bukkeru</title>
</head>

<body>
  <script src="/assets/main.js"></script>
</body>
`

const serveHtml = res => res.end(html)

module.exports = serveHtml
