import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import store from './store'
import App from './App.vue'
import installElementPlus from './plugins/element'
import { ja, en, zh_tw } from './lang/'


const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    ja,
    en,
    zh_tw
  }, // set locale messages
})
const app = createApp(App)

app.use(store)
app.use(i18n)
installElementPlus(app)
app.mount('#app')