import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from 'unhead'
import V3ScrollLock from 'v3-scroll-lock'

import './assets/css/style.css'

const app = createApp(App)


createHead()

const scrollToAnchor = (to) => {
  if (to.hash) {
    const element = document.getElementById(to.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};


app.use(
  createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
    scrollToAnchor(to);
  },
  })
)

app.use(V3ScrollLock, {})

app.mount('#app')
