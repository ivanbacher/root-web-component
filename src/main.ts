import Aurelia from 'aurelia'
import { MyApp } from './my-app'

export default class MyWebComponentApp extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })

    this.shadowRoot!.innerHTML = '<my-app></my-app>'
  }

  async connectedCallback() {
    const host = this.shadowRoot!.querySelector('my-app') as HTMLElement

    Aurelia
      .app({ host: host, component: MyApp })
      .start()
  }
}

customElements.define('my-web-component-app', MyWebComponentApp)