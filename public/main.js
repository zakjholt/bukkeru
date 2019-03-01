const state = {
  currentImg: {
    name: '',
    url: ''
  },
  loading: false,
  getAnother: function() {
    state.loading = true
    m.request({ method: 'GET', url: '/get-link' }).then(res => {
      state.currentImg = res
      state.loading = false
    })
  }
}

const label = state =>
  !state.loading &&
  m('a', { href: state.currentImg.url }, state.currentImg.name)

const img = state => m('img', { class: 'image', src: state.currentImg.url }, [])

const controls = state =>
  m('button.controls', { onclick: state.getAnother }, ['another please'])

const loader = m('div', { class: 'loader' })

const app = {
  view: function() {
    return [
      label(state),
      ...(!state.loading ? [img(state)] : [loader]),
      controls(state)
    ]
  }
}

m.mount(document.body, app)

state.getAnother()
