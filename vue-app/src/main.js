import './assets/app.css'
import { createApp, readonly } from 'vue'
import App from './App.vue'
import StatusBar from './components/global/StatusBar.vue'
import { myPlugin } from './plugins/myplugin'
// //Create Application Object 
// const app = createApp(App)
// //Global Component Registration
// app.component('StatusBar',StatusBar)
// app.mount('#app')

//shortcuts 
createApp(App)
    .component('StatusBar', StatusBar)
    .provide('companyName', 'IBM')
    .directive('focus', (element, binding) => {
        console.log('directive => ', element)
        element.focus()
    })
    .directive('highlight', (element, binding) => {

        if (binding.modifiers.bar) {
            element.style.backgroundColor = 'red'
        }
        //set inital color:
        element.style.backgroundColor = binding.value
        element.addEventListener('mousemove', (evt) => {
            //element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        //remove style
        element.addEventListener('mouseleave', (evt) => {
            // element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    })
    //register plugin
    .use(myPlugin)
    .mount('#app')
