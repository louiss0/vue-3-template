import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import components from "../src/components/base/globals";

const app = createApp(App)


Object.entries(components).forEach(([key, value]) => {
    
    app.component(key, value)


})

app.use(router)

    
app.mount('#app')
