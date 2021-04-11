import { createSSRApp } from 'vue'
import { createRouter } from './router'
import { createHead } from '@vueuse/head'

export { createApp }

function createApp({ Page }) {
  const app = createSSRApp(Page)
  const router = createRouter()
  const head = createHead()

  app.use(router)
  app.use(head)
  return { app, router, head }
}
