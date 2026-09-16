import { createRouter, createWebHashHistory } from 'vue-router'
import WikiHome from '../views/WikiHome.vue'
import WikiPage from '../views/WikiPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: WikiHome },
  { path: '/page/:id', component: WikiPage },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
