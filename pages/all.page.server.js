import { renderToString } from '@vue/server-renderer'
import { html } from 'vite-plugin-ssr'
import { createApp } from './app'
import {createHead, renderHeadToString} from "@vueuse/head";

export { render }

async function render({ Page, contextProps }) {
  const { app, router } = createApp({ Page })

  const head = createHead();
  const { headTags, htmlAttrs, bodyAttrs } = renderHeadToString(head);

  router.push(contextProps.url)
  await router.isReady()

  const appHtml = await renderToString(app)

  return html`<!DOCTYPE html>
    <html>
      <head>
        ${html.dangerouslySetHtml(headTags)}
      </head>
      <body>
        <div id="app">${html.dangerouslySetHtml(appHtml)}</div>
      </body>
    </html>`
}
