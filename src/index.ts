import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'

if (module && module.hot) {
  module.hot.accept()
}

const deck = new Reveal({
  plugins: [Markdown]
})
deck.initialize()

Reveal.initialize()
