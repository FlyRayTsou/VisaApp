import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import installElementPlus from './plugins/element'

const app = createApp(App)
app.use(store)
installElementPlus(app)
app.mount('#app')