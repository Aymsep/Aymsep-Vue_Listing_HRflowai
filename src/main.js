import '@/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CustomHeader from '@/components/common/CustomHeader.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'


const pinia = createPinia()
// pinia.use(piniaPersist)


createApp(App)
.component('CustomHeader',CustomHeader)
.use(pinia)
.use(router)
.mount('#app')
