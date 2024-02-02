import './assets/css/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import TabOverview from '@/components/Tabs/Tab-overview.vue'
// import TabTransactionsHistory from '@/components/Tabs/Tab-transactions-history.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// app.component('TheHeader', TheHeader)
app.component(
  'TabOverview',
  defineAsyncComponent(() => import('@/components/Tabs/Tab-overview.vue'))
)
app.component(
  'TabTransactionsHistory',
  defineAsyncComponent(() => import('@/components/Tabs/Tab-transactions-history.vue'))
)

app.mount('#app')
