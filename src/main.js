import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { messages } from './lang/messages'

const app = createApp(App)
const pinia = createPinia();
const i18n = createI18n({
    locale: 'en',
    fallbackFormat: 'en',
    messages
})

app.use(pinia).use(i18n).mount('#app')
