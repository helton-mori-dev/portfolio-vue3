import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./assets/fontello/css/fontello.css";
import i18n from "./i18n";

const app = createApp(App);

// Use o i18n na aplicação Vue
app.use(i18n);

app.mount("#app");
