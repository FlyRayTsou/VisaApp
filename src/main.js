import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import store from './store'
import App from './App.vue'
import installElementPlus from './plugins/element'
import ja from './lang/ja'
import en from './lang/en'
import zh_tw from './lang/zh-tw'


const i18n = createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    ja : ja,
    en : en,
    zh_tw : zh_tw
  }, // set locale messages
})
const app = createApp(App)

app.use(store)
app.use(i18n)
installElementPlus(app)
app.mount('#app')