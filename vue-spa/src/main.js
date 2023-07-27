// import './assets/main.css'
 import './assets/app.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Router plugin been added
app.use(router)

app.mount('#app')
