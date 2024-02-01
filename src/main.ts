import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import TabOverview from '@/components/Tabs/Tab-overview.vue'
import TabTransactionsHistory from '@/components/Tabs/Tab-transactions-history.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('TheHeader', TheHeader)
app.component('TabOverview', TabOverview)
app.component('TabTransactionsHistory', TabTransactionsHistory)

app.mount('#app')
