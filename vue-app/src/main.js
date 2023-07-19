// import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'

// //Create Application Object 
// const app = createApp(App)
// //Global Component Registration
// app.component('StatusBar',StatusBar)
// app.mount('#app')

//shortcuts 
createApp(App)
 .component('StatusBar',StatusBar)
 .mount('#app')
