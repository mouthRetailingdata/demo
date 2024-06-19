import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { VueDraggableNext } from 'vuedraggable'

const app = createApp(App)
app.component('draggable', VueDraggableNext)
app.mount('#app')
// createApp(App).use(VueDraggableNext).mount('#app')
