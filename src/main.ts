import { createApp } from "vue";
import App from "./App.vue";
import baseComponents from './components/base';
import router from "./router";
import store from "./store";

const app = createApp(App)

for (const [key, value] of Object.entries(baseComponents)) {

  app.component(key, value)
}


app.use(store)

app.use(router)

app.mount("#app");
