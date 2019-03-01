## bukkeru

This is an app that grabs and displays random gifs and images from [bukk.it](http://bukk.it)

The api is built using [zeit micro](https://github.com/zeit/micro) and is deployed with [zeit now](https://zeit.co/now)

The frontend is built using [mithril.js](https://mithril.js.org)

### Routes

- View the app: `GET` to `/`

- To get a random image url data: `GET` to `/get-link`

response is:

```json
{
  "url": string,
  "name": string
}
```
