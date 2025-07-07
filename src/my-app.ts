import { customElement, shadowCSS, useShadowDOM } from 'aurelia'
import template from './my-app.html'
//@ts-ignore
import styles from './my-app.css?raw'

import { ComponentOne } from './components/component-one'
import { ComponentTwo } from './components/component-two'

@customElement({
  name: 'my-app',
  template: template,
  dependencies: [shadowCSS(styles), ComponentOne, ComponentTwo]
})

@useShadowDOM({ mode: 'open' })


export class MyApp {
  public message = 'Hello World!'
}