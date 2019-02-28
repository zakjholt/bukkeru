const getLink = require('./getLink')

module.exports = async (req, res) => {
  const { url, name } = await getLink()

  res.end(`
  <style>
    body {
      background: #232323;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 20vw;
    }

    .image {
      width: 60vw;
      height: auto;
    }

    a {
      color: white;
      margin-top: 10px;
      font-size: 16px
    }

    button {
      margin-top: 10px;
      padding: 5px;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    @media only screen and (max-width: 600px) {
      body {
        padding: 0;
        flex-direction: column;
        justify-content: center;
      }

      .controls {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .image {
        width: 80vw;
      }
    }
  </style>

  <body>
    <img src="${url}" class="image" />

    <div class="controls">
      <a href="${url}">${name}</a>
      <button>another please</button>
    </div>
    <script>
      document.querySelector('button').addEventListener('click', (e) => {
        e.target.parentNode.removeChild(e.target)
        location.reload()
      })
    </script>
  </body>
  `)
}
