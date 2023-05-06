import { defaultConfig, plugin } from '@formkit/vue'
import { type UserModule } from '~/types'

// export const install: UserModule = ({ app }) => {
//   app.use(plugin, defaultConfig).mount('#app')
// }
export const install: UserModule = ({ app }) => {
  app.use(plugin, defaultConfig({
    theme: 'genesis', // will load from CDN and inject into document head
  }))
}
