import './assets/app.css'
import { createApp, readonly } from 'vue'
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
 .provide('companyName','IBM')
 .mount('#app')
