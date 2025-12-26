import { createApp } from 'vue'
import './style.css'
import './assets/hd.scss'
import App from './App.vue'
import XInput from './components/x-input.vue';
import XTextarea from './components/x-textarea.vue';
const app = createApp(App)
app.component('XInput', XInput);
app.component('XTextarea', XTextarea);
app.mount('#app')
