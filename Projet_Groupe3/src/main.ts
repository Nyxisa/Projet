import { createApp } from 'vue'
import App from './App.vue'
import routes from '~pages'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import { createHead } from 'unhead'
import V3ScrollLock from 'v3-scroll-lock'
import NotFound from '@/components/Page404.vue';

import './assets/css/style.css'

const app = createApp(App)

createHead()

const scrollToAnchor = (to: RouteLocationNormalized) => {
  if (to.hash) {
    const element = document.getElementById(to.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

app.use(V3ScrollLock, {})
app.use(
  createRouter({
    history: createWebHistory(),
    routes: [
    ...routes,
    {
      path: '/:catchAll(.*)', 
      component: NotFound,
    },],
    scrollBehavior(to, from, savedPosition) {
    scrollToAnchor(to);
  },
  })
)


app.mount('#app')
